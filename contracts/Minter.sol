// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import "./libraries/Math.sol";
import "./interfaces/IMinter.sol";
import "./interfaces/ITokan.sol";
import "./interfaces/IVoter.sol";
import "./interfaces/IVotingEscrow.sol";
import "./interfaces/IRewardsDistributor.sol";
import "contracts/Epoch.sol";

// codifies the minting rules as per ve(3,3), abstracted from the token to support any token that allows minting

contract Minter is IMinter {
    bool public isFirstMint;

    uint256 public EMISSION;
    uint256 public TAIL_EMISSION;
    uint256 public constant PRECISION = 1000;
    uint256 public teamRate;
    uint256 public constant MAX_TEAM_RATE = 50; // 5%

    uint256 public weekly; // represents a starting weekly emission of 2.6M TOKAN (TOKAN has 18 decimals)
    uint256 public active_period;
    uint256 public constant LOCK = 86400 * 7 * 52 * 4; // 4 years

    address public team;
    address public pendingTeam;

    ITokan public _tokan;
    IVoter public _voter;
    IVotingEscrow public _ve;
    IRewardsDistributor public _rewardsDistributor;

    bool internal initFlag;
    bool public rebaseDisabled = false;
    event Mint(
        address indexed sender,
        uint256 weekly,
        uint256 circulating_supply,
        uint256 circulating_emission
    );

    /// @param __voter  voter contract address
    /// @param __ve Voting Escrow (veNFT) contract address
    constructor(address __voter, address __ve, address _tkn_addr) {
        initFlag = false;
        team = msg.sender;

        _tokan = ITokan(_tkn_addr);
        _voter = IVoter(__voter);
        _ve = IVotingEscrow(__ve);

        teamRate = 30;
        EMISSION = 990;
        TAIL_EMISSION = 2;

        weekly = 40_000_000 * 1e18; // represents a starting weekly emission of 2.6M TOKAN (TOKAN has 18 decimals)
        isFirstMint = true;
    }

    function init(
        address _team_msig, // the voting & distribution system
        address __rewardsDistributor
    ) external {
        require(msg.sender == team, "not team");
        require(!initFlag, "init already called");
        initFlag = true;

        team = _team_msig;
         
        _rewardsDistributor =  IRewardsDistributor(__rewardsDistributor);// the distribution system that ensures users aren't diluted

        active_period = ((block.timestamp + EPOCH_DURATION) / EPOCH_DURATION) * EPOCH_DURATION;
    }

    function setTkn(address __tkn, address __ve) external {
        require(msg.sender == team, "not team");
        require(__tkn == IVotingEscrow(__ve).token(), 'tokan address doesnt match ve base');
        _tokan = ITokan(__tkn);
        _ve = IVotingEscrow(__ve);
    }

    function setTeam(address _team) external {
        require(msg.sender == team, "not team");
        pendingTeam = _team;
    }

    function acceptTeam() external {
        require(msg.sender == pendingTeam, "not pending team");
        team = pendingTeam;
    }

    function setVoter(address __voter) external {
        require(__voter != address(0));
        require(msg.sender == team, "not team");
        _voter = IVoter(__voter);
    }

    function setTeamRate(uint256 _teamRate) external {
        require(msg.sender == team, "not team");
        require(_teamRate <= MAX_TEAM_RATE, "rate too high");
        teamRate = _teamRate;
    }

    function setEmission(uint256 _emission) external {
        require(msg.sender == team, "not team");
        require(_emission <= 1010, "rate too high");
        EMISSION = _emission;
    }

    function setRebaseDisbaled(bool _disabled) external {
        require(msg.sender == team, "not team");
        rebaseDisabled = _disabled;
    }

    // calculate circulating supply as total token supply - locked supply
    function circulating_supply() public view returns (uint256) {
        return _tokan.totalSupply() - _tokan.balanceOf(address(_ve));
    }

    // calculate inflation and adjust ve balances accordingly
    function calculate_growth( uint256 _weeklyMinted ) public view returns (uint256) {
        uint256 _veTotal = _ve.totalSupply();
        uint256 _tokanTotal = _tokan.totalSupply();
        if(rebaseDisabled) return 1 * 1e18;
        return (((((_weeklyMinted * _veTotal) / _tokanTotal) * _veTotal) / _tokanTotal) * _veTotal) / _tokanTotal / 2;
    }

    // emission calculation is 1% of available supply to mint adjusted by circulating / total supply
    function calculate_emission() public view returns (uint256) {
        return (weekly * EMISSION) / PRECISION;
    }

    // weekly emission takes the max of calculated (aka target) emission versus circulating tail end emission
    function weekly_emission() public view returns (uint256) {
        return Math.max(calculate_emission(), circulating_emission());
    }

    // calculates tail end (infinity) emissions as 0.2% of total supply
    function circulating_emission() public view returns (uint256) {
        return (circulating_supply() * TAIL_EMISSION) / PRECISION;
    }

    // update period can only be called once per cycle (1 week)
    function update_period() external returns (uint256) {
        uint256 _period = active_period;
        if (block.timestamp >= _period + EPOCH_DURATION && initFlag) {
            // only trigger if new week
            _period = (block.timestamp / EPOCH_DURATION) * EPOCH_DURATION;
            active_period = _period;
            if (!isFirstMint) {
                weekly = weekly_emission();
            } else {
                isFirstMint = false;
            }
            uint256 _growth = calculate_growth(weekly);
            uint256 _teamEmissions = (teamRate * (weekly)) / (PRECISION - teamRate);
            uint256 _required = _growth + weekly + _teamEmissions;
            uint256 _balanceOf = _tokan.balanceOf(address(this));
            if (_balanceOf < _required) {
                _tokan.mint(address(this), _required - _balanceOf);
            }

            require(_tokan.transfer(team, _teamEmissions));
            require(_tokan.transfer(address(_rewardsDistributor), _growth));
            _rewardsDistributor.checkpoint_token(); // checkpoint token balance that was just minted in rewards distributor
            _rewardsDistributor.checkpoint_total_supply(); // checkpoint supply
            _tokan.approve(address(_voter), weekly);
            _voter.notifyRewardAmount(weekly);

            emit Mint( msg.sender, weekly, circulating_supply(), circulating_emission() );
        }
        return _period;
    }

    function check() external view returns (bool) {
        uint256 _period = active_period;
        return (block.timestamp >= _period + EPOCH_DURATION && initFlag);
    }

    function period() external view returns (uint256) {
        return (block.timestamp / EPOCH_DURATION) * EPOCH_DURATION;
    }

    function nextPeriod() external view returns (uint256) {
        return active_period + EPOCH_DURATION;
    }
    function setRewardDistributor(address _newRewardsDistributor) external {
        require(msg.sender == team);
        _rewardsDistributor = IRewardsDistributor(_newRewardsDistributor);
    }
}
