// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./interfaces/IERC20.sol";

import "./interfaces/IBribe.sol";
import "./interfaces/IBribeFactory.sol";
import "./interfaces/IGauge.sol";
import "./interfaces/IGaugeFactory.sol";
import "./interfaces/IMinter.sol";
import "./interfaces/IPair.sol";
import "./interfaces/IPairFactory.sol";
import "./interfaces/IVoter.sol";
import "./interfaces/IVotingEscrow.sol";

import "./Epoch.sol";

contract Voter is IVoter, ReentrancyGuard {
    bool internal initFlag;
    bool internal reInitFlag;

    address public _ve; // the ve token that governs these contracts
    address public factory; // the PairFactory
    address internal base;
    address public gaugefactory;
    address public bribefactory;
    address public minter;
    address public governor; // should be set to an IGovernor
    address public emergencyCouncil; // credibly neutral party similar to Curve's Emergency DAO

    address[] public pools; // all pools viable for incentives

    uint256 internal index;

    mapping(address => uint256) internal supplyIndex;
    mapping(address => uint256) public claimable;

    mapping(address => address) public gauges; // pool => gauge
    mapping(address => uint256) public gaugesDistributionTimestamp;
    mapping(address => address) public poolForGauge; // gauge => pool
    mapping(address => address) public internal_bribes; // gauge => internal bribe (only fees)
    mapping(address => address) public external_bribes; // gauge => external bribe (real bribes)

    mapping(uint256 => mapping(address => uint256)) public votes; // nft => pool => votes
    mapping(uint256 => address[]) public poolVote; // nft => pools

    mapping(uint256 => mapping(address => uint256)) internal weightsPerEpoch; // timestamp => pool => weights
    mapping(uint256 => uint256) internal totalWeightsPerEpoch; // timestamp => total weights

    mapping(uint256 => uint256) public lastVoted; // nft => timestamp of last vote, to ensure one vote per epoch
    mapping(address => bool) public isGauge;
    mapping(address => bool) public isWhitelisted;
    mapping(address => bool) public isAlive;

    mapping(address => bool) public isBribe;

    event GaugeCreated(
        address indexed gauge,
        address creator,
        address internal_bribe,
        address indexed external_bribe,
        address indexed pool
    );
    event GaugeKilled(address indexed gauge);
    event GaugeRevived(address indexed gauge);
    event Voted(address indexed voter, uint256 tokenId, uint256 weight);
    event Abstained(uint256 tokenId, uint256 weight);
    event Deposit(
        address indexed lp,
        address indexed gauge,
        uint256 tokenId,
        uint256 amount
    );
    event Withdraw(
        address indexed lp,
        address indexed gauge,
        uint256 tokenId,
        uint256 amount
    );
    event NotifyReward(
        address indexed sender,
        address indexed reward,
        uint256 amount
    );
    event DistributeReward(
        address indexed sender,
        address indexed gauge,
        uint256 amount
    );
    event Whitelisted(address indexed whitelister, address indexed token);
    event Blacklisted(address indexed blacklister, address indexed token);

    constructor(
        address __ve,
        address _pair_factory,
        address _gauge_factory,
        address _bribe_factory
    ) {
        initFlag = false;
        _ve = __ve;
        base = IVotingEscrow(__ve).token();

        factory = _pair_factory;
        gaugefactory = _gauge_factory;
        bribefactory = _bribe_factory;

        minter = msg.sender;
        governor = msg.sender;
        emergencyCouncil = msg.sender;
    }

    function init(
        address _minter,
        address _governor,
        address _emergency_council,
        address[] memory _whitelist_tokens
    ) external {
        require(
            msg.sender == minter ||
                msg.sender == emergencyCouncil ||
                msg.sender == governor
        );
        require(!initFlag, "init already called");
        initFlag = true;
        reInitFlag = false;
        for (uint256 i = 0; i < _whitelist_tokens.length; i++) {
            _whitelist(_whitelist_tokens[i]);
        }
        minter = _minter;
        emergencyCouncil = _emergency_council;
        governor = _governor;
    }

    function reinitialize() external {
        // first distribution had the wrong period, fix it here
        require(
            msg.sender == minter ||
                msg.sender == emergencyCouncil ||
                msg.sender == governor
        );
        require(!reInitFlag,'reInit already called');
        reInitFlag = true;
        uint256 currentTimestamp = IMinter(minter).active_period();
        for (uint256 i = pools.length; i != 0; ) {
            unchecked {
                --i;
            }
            address gauge = gauges[pools[i]];
            gaugesDistributionTimestamp[gauge] = currentTimestamp;
        }
    }

    /* -----------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
                                    VoterAdmin
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    ----------------------------------------------------------------------------- */

    function setMinter(address _minter) external {
        require(msg.sender == emergencyCouncil);
        minter = _minter;
    }

    function setGovernor(address _governor) public {
        require(msg.sender == governor);
        governor = _governor;
    }

    function setEmergencyCouncil(address _council) public {
        require(msg.sender == emergencyCouncil);
        emergencyCouncil = _council;
    }

    function setBribeFactory(address _bribeFactory) external {
        require(msg.sender == emergencyCouncil);
        bribefactory = _bribeFactory;
    }

    function setNewBribe(
        address _gauge,
        address _internal,
        address _external
    ) external {
        require(msg.sender == emergencyCouncil);
        require(isGauge[_gauge] = true);
        internal_bribes[_gauge] = _internal;
        external_bribes[_gauge] = _external;
    }

    function setGaugeFactory(address _gaugeFactory) external {
        require(msg.sender == emergencyCouncil);
        gaugefactory = _gaugeFactory;
    }

    function setPairFactory(address _factory) external {
        require(msg.sender == emergencyCouncil);
        factory = _factory;
    }

    function setVotingEscrow(address _votingEscrow) external {
        require(msg.sender == governor);
        _ve = _votingEscrow;
    }

    /* -----------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
                                    GOVERNANCE
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    ----------------------------------------------------------------------------- */

    function whitelist(address[] memory _token) public {
        require(msg.sender == governor);
        for (uint256 i = _token.length; i != 0; ) {
            unchecked {
                --i;
            }
            _whitelist(_token[i]);
        }
    }

    function whitelist(address _token) public {
        require(msg.sender == governor, "!governor");
        _whitelist(_token);
    }

    function _whitelist(address _token) internal {
        require(!isWhitelisted[_token], "already whitelisted");
        isWhitelisted[_token] = true;
        emit Whitelisted(msg.sender, _token);
    }

    /// @notice Blacklist a malicious token
    function blacklist(address[] memory _token) public {
        require(msg.sender == governor, "!governor");
        uint256 i = 0;
        for (i = 0; i < _token.length; i++) {
            _blacklist(_token[i]);
        }
    }

    function _blacklist(address _token) internal {
        require(isWhitelisted[_token], "o");
        isWhitelisted[_token] = false;
        emit Blacklisted(msg.sender, _token);
    }

    function killGauge(address _gauge) external {
        require(msg.sender == emergencyCouncil, "not emergency council");
        require(isAlive[_gauge], "gauge already dead");
        isAlive[_gauge] = false;
        claimable[_gauge] = 0;

        uint _time = _epochTimestamp();
        totalWeightsPerEpoch[_time] -= weightsPerEpoch[_time][
            poolForGauge[_gauge]
        ];

        emit GaugeKilled(_gauge);
    }

    function reviveGauge(address _gauge) external {
        require(msg.sender == emergencyCouncil, "not emergency council");
        require(!isAlive[_gauge], "gauge already alive");
        require(isGauge[_gauge], "not gauge");
        isAlive[_gauge] = true;
        emit GaugeRevived(_gauge);
    }

    /* -----------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
                                    USER INTERACTION
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    ----------------------------------------------------------------------------- */
    function reset(uint256 _tokenId) external nonReentrant {
        require(
            msg.sender == _ve ||
                IVotingEscrow(_ve).isApprovedOrOwner(msg.sender, _tokenId)
        );
        _reset(_tokenId);
        IVotingEscrow(_ve).abstain(_tokenId);
        lastVoted[_tokenId] = _epochTimestamp() + 1;
    }

    function _reset(uint256 _tokenId) internal {
        address[] storage _poolVote = poolVote[_tokenId];
        uint256 _poolVoteCnt = _poolVote.length;
        uint256 _totalWeight = 0;

        uint256 _time = _epochTimestamp();
        uint256 lastVoteTimestamp = lastVoted[_tokenId];

        for (uint256 i = 0; i < _poolVoteCnt; i++) {
            address _pool = _poolVote[i];
            uint256 _votes = votes[_tokenId][_pool];

            if (_votes != 0) {
                votes[_tokenId][_pool] -= _votes;

                if (lastVoteTimestamp > _time) {
                    weightsPerEpoch[_time][_pool] -= _votes;

                    IBribe(internal_bribes[gauges[_pool]])._withdraw(
                        uint256(_votes),
                        _tokenId
                    );
                    IBribe(external_bribes[gauges[_pool]])._withdraw(
                        uint256(_votes),
                        _tokenId
                    );

                    // if is alive remove _votes, else don't because we already done it in killGauge()
                    if (isAlive[gauges[_pool]]) _totalWeight += _votes;
                }

                emit Abstained(_tokenId, _votes);
            }
        }
        // if user last vote is < than epochTimestamp then _totalWeight is 0! IF not underflow occur
        if (lastVoteTimestamp < _time) _totalWeight = 0;

        totalWeightsPerEpoch[_time] -= _totalWeight;
        delete poolVote[_tokenId];
    }

    function poke(uint256 _tokenId) external nonReentrant {
        require(
            msg.sender == _ve ||
                IVotingEscrow(_ve).isApprovedOrOwner(msg.sender, _tokenId)
        );
        address[] memory _poolVote = poolVote[_tokenId];
        uint256 _poolCnt = _poolVote.length;
        uint256[] memory _weights = new uint256[](_poolCnt);
        for (uint256 i = _poolCnt; i != 0; ) {
            unchecked {
                --i;
            }
            _weights[i] = votes[_tokenId][_poolVote[i]];
        }
        _vote(_tokenId, _poolVote, _weights);
        lastVoted[_tokenId] = _epochTimestamp() + 1;
    }

    function vote(
        uint256 _tokenId,
        address[] memory _poolVote,
        uint256[] memory _weights
    ) external nonReentrant {
        require(IVotingEscrow(_ve).isApprovedOrOwner(msg.sender, _tokenId));
        require(_poolVote.length == _weights.length);
        _vote(_tokenId, _poolVote, _weights);
        lastVoted[_tokenId] = _epochTimestamp() + 1;
    }

    function _vote(
        uint256 _tokenId,
        address[] memory _poolVote,
        uint256[] memory _weights
    ) internal {
        _reset(_tokenId);
        uint256 _poolCnt = _poolVote.length;
        uint256 _weight = IVotingEscrow(_ve).balanceOfNFT(_tokenId);
        uint256 _totalVoteWeight = 0;
        uint256 _totalWeight = 0;
        uint256 _usedWeight = 0;
        uint256 _time = _epochTimestamp();

        for (uint256 i = _poolCnt; i != 0; ) {
            unchecked {
                --i;
            }
            if (isAlive[gauges[_poolVote[i]]]) _totalVoteWeight += _weights[i];
        }

        for (uint256 i = _poolCnt; i != 0; ) {
            unchecked {
                --i;
            }
            address _pool = _poolVote[i];
            address _gauge = gauges[_pool];

            if (isGauge[_gauge] && isAlive[_gauge]) {
                uint256 _poolWeight = (_weights[i] * _weight) /
                    _totalVoteWeight;

                require(votes[_tokenId][_pool] == 0);
                require(_poolWeight != 0);

                poolVote[_tokenId].push(_pool);

                weightsPerEpoch[_time][_pool] += _poolWeight;

                votes[_tokenId][_pool] += _poolWeight;

                IBribe(internal_bribes[_gauge])._deposit(
                    uint256(_poolWeight),
                    _tokenId
                );
                IBribe(external_bribes[_gauge])._deposit(
                    uint256(_poolWeight),
                    _tokenId
                );

                _usedWeight += _poolWeight;
                _totalWeight += _poolWeight;
                emit Voted(msg.sender, _tokenId, _poolWeight);
            }
        }
        if (_usedWeight != 0) IVotingEscrow(_ve).voting(_tokenId);
        totalWeightsPerEpoch[_time] += _totalWeight;
    }

    function claimBribes(
        address[] memory _bribes,
        address[][] memory _tokens,
        uint256 _tokenId
    ) external {
        require(IVotingEscrow(_ve).isApprovedOrOwner(msg.sender, _tokenId));
        for (uint256 i = _bribes.length; i != 0; ) {
            unchecked {
                --i;
            }
            IBribe(_bribes[i]).getRewardForOwner(_tokenId, _tokens[i]);
        }
    }

    function claimFees(
        address[] memory _fees,
        address[][] memory _tokens,
        uint256 _tokenId
    ) external {
        require(IVotingEscrow(_ve).isApprovedOrOwner(msg.sender, _tokenId));
        for (uint256 i = _fees.length; i != 0; ) {
            unchecked {
                --i;
            }
            IBribe(_fees[i]).getRewardForOwner(_tokenId, _tokens[i]);
        }
    }

    /* -----------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
                                    GAUGE CREATION
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    ----------------------------------------------------------------------------- */

    function createGauge(address _pool) external returns (address) {
        require(gauges[_pool] == address(0x0), "exists");
        address[] memory allowedRewards = new address[](3);
        address[] memory internalRewards = new address[](2);
        bool isPair = IPairFactory(factory).isPair(_pool);
        address tokenA;
        address tokenB;

        if (isPair) {
            (tokenA, tokenB) = IPair(_pool).tokens();
            allowedRewards[0] = tokenA;
            allowedRewards[1] = tokenB;
            internalRewards[0] = tokenA;
            internalRewards[1] = tokenB;

            if (base != tokenA && base != tokenB) {
                allowedRewards[2] = base;
            }
        }

        if (msg.sender != governor) {
            // gov can create for any pool, even non-Tokan pairs
            require(isPair, "!_pool");
            require(
                isWhitelisted[tokenA] && isWhitelisted[tokenB],
                "!whitelisted"
            );
        }

        string memory _type = string.concat(
            "Tokan LP Fees: ",
            IERC20(_pool).symbol()
        );
        address _internal_bribe = IBribeFactory(bribefactory).createBribe(
            emergencyCouncil,
            tokenA,
            tokenB,
            _type
        );
        isBribe[_internal_bribe] = true;

        _type = string.concat("Tokan Bribes: ", IERC20(_pool).symbol());
        address _external_bribe = IBribeFactory(bribefactory).createBribe(
            emergencyCouncil,
            tokenA,
            tokenB,
            _type
        );
        isBribe[_external_bribe] = true;

        address _gauge = IGaugeFactory(gaugefactory).createGauge(
            base,
            _ve,
            _pool,
            address(this),
            _internal_bribe,
            _external_bribe,
            isPair
        );

        IERC20(base).approve(_gauge, type(uint256).max);

        internal_bribes[_gauge] = _internal_bribe;
        external_bribes[_gauge] = _external_bribe;
        gauges[_pool] = _gauge;
        poolForGauge[_gauge] = _pool;
        isGauge[_gauge] = true;
        isAlive[_gauge] = true;
        pools.push(_pool);

        supplyIndex[_gauge] = index;

        emit GaugeCreated(
            _gauge,
            msg.sender,
            _internal_bribe,
            _external_bribe,
            _pool
        );
        return _gauge;
    }

    function initGauges(
        address[] memory _gauges,
        address[] memory _pools
    ) public {
        require(msg.sender == emergencyCouncil);
        for (uint256 i = _pools.length; i != 0; ) {
            unchecked {
                --i;
            }
            address _pool = _pools[i];
            address _gauge = _gauges[i];
            address tokenA;
            address tokenB;
            (tokenA, tokenB) = IPair(_pool).tokens();

            string memory _type = string.concat(
                "Tokan LP Fees: ",
                IERC20(_pool).symbol()
            );
            address _internal_bribe = IBribeFactory(bribefactory).createBribe(
                emergencyCouncil,
                tokenA,
                tokenB,
                _type
            );
            _type = string.concat("Tokan Bribes: ", IERC20(_pool).symbol());
            address _external_bribe = IBribeFactory(bribefactory).createBribe(
                emergencyCouncil,
                tokenA,
                tokenB,
                _type
            );
            IERC20(base).approve(_gauge, type(uint256).max);
            internal_bribes[_gauge] = _internal_bribe;
            external_bribes[_gauge] = _external_bribe;
            gauges[_pool] = _gauge;
            poolForGauge[_gauge] = _pool;
            isGauge[_gauge] = true;
            isAlive[_gauge] = true;
            _updateFor(_gauge);
            pools.push(_pool);

            // update index
            supplyIndex[_gauge] = index; // new gauges are set to the default global state

            emit GaugeCreated(
                _gauge,
                msg.sender,
                _internal_bribe,
                _external_bribe,
                _pool
            );
        }
    }

    /* -----------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
                                    VIEW FUNCTIONS
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    ----------------------------------------------------------------------------- */

    function length() external view returns (uint256) {
        return pools.length;
    }

    function poolVoteLength(uint256 tokenId) external view returns (uint256) {
        return poolVote[tokenId].length;
    }

    function getIncentivizedPools() external view returns (address[] memory) {
        return pools;
    }

    function weights(address _pool) public view returns (uint256) {
        uint256 _time = _epochTimestamp();
        return weightsPerEpoch[_time][_pool];
    }

    function weightsAt(
        address _pool,
        uint256 _time
    ) public view returns (uint256) {
        return weightsPerEpoch[_time][_pool];
    }

    function totalWeight() public view returns (uint256) {
        uint256 _time = _epochTimestamp();
        return totalWeightsPerEpoch[_time];
    }

    function totalWeightAt(uint256 _time) public view returns (uint256) {
        return totalWeightsPerEpoch[_time];
    }

    function _epochTimestamp() public view returns (uint256) {
        return IMinter(minter).active_period();
    }

    /* -----------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
                                    DISTRIBUTION
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    ----------------------------------------------------------------------------- */

    function notifyRewardAmount(uint256 amount) external {
        require(msg.sender == minter, "!minter");

        _safeTransferFrom(base, msg.sender, address(this), amount); // transfer the distro in

        uint256 _totalWeight = totalWeightAt(
            _epochTimestamp() - EPOCH_DURATION
        ); // minter call notify after updates active_period, loads votes - 1 week

        uint256 _ratio = 0;

        if (_totalWeight > 0) _ratio = (amount * 1e18) / _totalWeight; // 1e18 adjustment is removed during claim
        if (_ratio > 0) {
            index += _ratio;
        }
        emit NotifyReward(msg.sender, base, amount);
    }

    function distributeFees(address[] memory _gauges) external {
        for (uint256 i = 0; i < _gauges.length; i++) {
            if (isGauge[_gauges[i]] && isAlive[_gauges[i]]) {
                IGauge(_gauges[i]).claimFees();
            }
        }
    }

    /// @notice Distribute the emission for ALL gauges
    function distributeAll() external nonReentrant {
        IMinter(minter).update_period();

        uint256 x = 0;
        uint256 stop = pools.length;
        for (x; x < stop; x++) {
            _distribute(gauges[pools[x]]);
        }
    }

    /// @notice distribute the emission for N gauges
    /// @param  start   start index point of the pools array
    /// @param  finish  finish index point of the pools array
    /// @dev    this function is used in case we have too many pools and gasLimit is reached
    function distribute(uint256 start, uint256 finish) public nonReentrant {
        IMinter(minter).update_period();
        for (uint256 x = start; x < finish; x++) {
            _distribute(gauges[pools[x]]);
        }
    }

    /// @notice distribute reward only for given gauges
    /// @dev    this function is used in case some distribution fails
    function distribute(address[] memory _gauges) external nonReentrant {
        IMinter(minter).update_period();
        for (uint256 x = 0; x < _gauges.length; x++) {
            _distribute(_gauges[x]);
        }
    }

    /// @notice distribute the emission
    function _distribute(address _gauge) internal {
        uint256 lastTimestamp = gaugesDistributionTimestamp[_gauge];
        uint256 currentTimestamp = _epochTimestamp();

        if (lastTimestamp < currentTimestamp) {
            _updateFor(_gauge); // should set claimable to 0 if killed

            uint256 _claimable = claimable[_gauge];

            // distribute only if claimable is > 0, currentEpoch != lastepoch and gauge is alive
            if (_claimable > 0 && isAlive[_gauge]) {
                claimable[_gauge] = 0;
                gaugesDistributionTimestamp[_gauge] = currentTimestamp;
                IGauge(_gauge).notifyRewardAmount(base, _claimable);
                emit DistributeReward(msg.sender, _gauge, _claimable);
            }
        }
    }

    /* -----------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
                                    HELPERS
    --------------------------------------------------------------------------------
    --------------------------------------------------------------------------------
    ----------------------------------------------------------------------------- */

    function _updateFor(address _gauge) internal {
        address _pool = poolForGauge[_gauge];
        uint256 _time = _epochTimestamp() - EPOCH_DURATION;
        uint256 _supplied = weightsPerEpoch[_time][_pool];

        if (_supplied != 0) {
            uint256 _supplyIndex = supplyIndex[_gauge];
            uint256 _index = index; // get global index0 for accumulated distro
            supplyIndex[_gauge] = _index; // update _gauge current position to global position
            uint256 _delta = _index - _supplyIndex; // see if there is any difference that need to be accrued
            if (_delta != 0) {
                uint256 _share = (_supplied * _delta) / 1e18; // add accrued difference for each supplied token
                if (isAlive[_gauge]) {
                    claimable[_gauge] += _share;
                }
            }
        } else {
            supplyIndex[_gauge] = index; // new users are set to the default global state
        }
    }

    function _safeTransferFrom(
        address token,
        address from,
        address to,
        uint256 value
    ) internal {
        if (value != 0) {
            require(token.code.length != 0);
            (bool success, bytes memory data) = token.call(
                abi.encodeWithSelector(
                    IERC20.transferFrom.selector,
                    from,
                    to,
                    value
                )
            );
            require(success && (data.length == 0 || abi.decode(data, (bool))));
        }
    }

    function increaseGaugeApprovals(address _gauge) external {
        require(msg.sender == emergencyCouncil);
        require(isGauge[_gauge] = true);
        IERC20(base).approve(_gauge, 0);
        IERC20(base).approve(_gauge, type(uint256).max);
    }

    function emitDeposit(
        uint256 tokenId,
        address account,
        uint256 amount
    ) external {
        require(isGauge[msg.sender]);
        require(isAlive[msg.sender]);
        emit Deposit(account, msg.sender, tokenId, amount);
    }

    function emitWithdraw(
        uint256 tokenId,
        address account,
        uint256 amount
    ) external {
        require(isGauge[msg.sender]);
        emit Withdraw(account, msg.sender, tokenId, amount);
    }
}
