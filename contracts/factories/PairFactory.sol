// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

import "../interfaces/IPairFactory.sol";
import "../Pair.sol";

contract PairFactory is IPairFactory, Pausable {
    using Math for uint256;

    bool internal initFlag;

    uint256 public constant FEE_PRECISION = 1e18;
    uint256 public constant MAX_FEE = 1e16; // 1%

    uint256 public stableFee;
    uint256 public volatileFee;

    address public feeManager;
    address public pendingFeeManager;
    address public pairManager;
    address public emergencyCouncil;
    address public pendingEmergencyCouncil;

    mapping(address => mapping(address => mapping(bool => address)))
        public getPair;
    mapping(address => bool) public isPair; // simplified check if its a pair, given that `stable` flag might not be available in peripherals
    mapping(address => bool) private _privileged;

    address internal _temp0;
    address internal _temp1;
    bool internal _temp;
    uint256 internal _tempFee;

    address[] public allPairs;

    event PairCreated(
        address indexed token0,
        address indexed token1,
        bool stable,
        address pair,
        uint256
    );
    event PrivilegedAccountStatusUpdated(address indexed account, bool _added);

    modifier onlyFeeManager() {
        require(msg.sender == feeManager);
        _;
    }

    modifier onlyPairManager() {
        require(msg.sender == pairManager || pairManager == address(0));
        _;
    }

    modifier onlyEmergencyCouncil() {
        require(
            msg.sender == emergencyCouncil || emergencyCouncil == address(0)
        );
        _;
    }

    constructor() {
        feeManager = msg.sender;
        pairManager = msg.sender;
        emergencyCouncil = msg.sender;
        stableFee = 0.04e16; // 0.04%
        volatileFee = 0.18e16; // 0.18%
        initFlag = false;
    }

    function init(
        address _fee_manager,
        address _pair_manager,
        address _emergency_council
    ) external {
        require(
            msg.sender == emergencyCouncil ||
                msg.sender == pairManager ||
                pairManager == address(0)
        );
        require(!initFlag, "Cant call again");
        feeManager = _fee_manager;
        pairManager = _pair_manager;
        emergencyCouncil = _emergency_council;
        initFlag = true;
    }

    function pause() external whenNotPaused onlyEmergencyCouncil {
        _pause();
    }

    function unpause() external whenPaused onlyEmergencyCouncil {
        _unpause();
    }

    function isPrivileged(address _account) external view returns (bool) {
        return _privileged[_account];
    }

    function allPairsLength() external view returns (uint256) {
        return allPairs.length;
    }

    function pairs() external view returns (address[] memory) {
        return allPairs;
    }

    function setFeeManager(address _feeManager) external onlyFeeManager {
        pendingFeeManager = _feeManager;
    }

    function setPairManager(
        address _pairManager
    ) external onlyEmergencyCouncil {
        pairManager = _pairManager;
    }

    function acceptFeeManager() external {
        require(msg.sender == pendingFeeManager);
        feeManager = pendingFeeManager;
    }

    function setEmergencyCouncil(
        address _emergencyCouncil
    ) external onlyEmergencyCouncil {
        pendingEmergencyCouncil = _emergencyCouncil;
    }

    function acceptEmergencyCouncil() external {
        require(msg.sender == pendingEmergencyCouncil);
        emergencyCouncil = pendingEmergencyCouncil;
    }

    function setFeeForPair(address _pair, uint256 _fee) external onlyFeeManager {
        require(_fee <= MAX_FEE, "MF");
        require(_fee != 0);
        Pair(_pair).updateFee(_fee);
    }
    
    function setFee(bool _stable, uint256 _fee) external onlyFeeManager {
        require(_fee <= MAX_FEE, "MF");
        require(_fee != 0);
        if (_stable) {
            stableFee = _fee;
        } else {
            volatileFee = _fee;
        }
    }

    function updatePrivilegedAccount(
        address _account,
        bool _addToPrivileged
    ) external onlyFeeManager {
        require(_privileged[_account] != _addToPrivileged);
        _privileged[_account] = _addToPrivileged;
        emit PrivilegedAccountStatusUpdated(_account, _addToPrivileged);
    }

    function getDefaultFee(bool _stable) public view returns (uint256) {
        return _stable ? stableFee : volatileFee;
    }

    function getFee(address _pair) public view returns (uint256) {
        return Pair(_pair).pairFee();
    }

    function getFeeAmount(
        uint256 _amount,
        address _account,
        uint256 _fee
    ) external view returns (uint256) {
        if (_privileged[_account]) return 0;
        return (_fee).mulDiv(_amount, FEE_PRECISION);
    }

    function pairCodeHash() external pure returns (bytes32) {
        return keccak256(type(Pair).creationCode);
    }

    function getInitializable() external view returns (address, address, bool, uint256) {
        return (_temp0, _temp1, _temp, _tempFee);
    }

    function createPair(
        address tokenA,
        address tokenB,
        bool stable
    ) external onlyPairManager returns (address pair) {
        require(tokenA != tokenB, "IA"); // Pair: IDENTICAL_ADDRESSES
        (address token0, address token1) = tokenA < tokenB
            ? (tokenA, tokenB)
            : (tokenB, tokenA);
        require(token0 != address(0), "ZA"); // Pair: ZERO_ADDRESS
        require(getPair[token0][token1][stable] == address(0), "PE"); // Pair: PAIR_EXISTS - single check is sufficient
        bytes32 salt = keccak256(abi.encodePacked(token0, token1, stable)); // notice salt includes stable as well, 3 parameters
        (_temp0, _temp1, _temp, _tempFee) = (token0, token1, stable, getDefaultFee(stable));
        pair = address(new Pair{salt: salt}());
        getPair[token0][token1][stable] = pair;
        getPair[token1][token0][stable] = pair; // populate mapping in the reverse direction
        allPairs.push(pair);
        isPair[pair] = true;
        emit PairCreated(token0, token1, stable, pair, allPairs.length);
    }
}
