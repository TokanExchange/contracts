// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../interfaces/IPairFactory.sol";
import "../interfaces/IVoter.sol";
import "../Epoch.sol";

contract FeeDistributor  {
    IPairFactory public pairFactory;
    IVoter public voter;
    uint256 public batchSize;
    uint256 public interval;
    uint256 public intervalOffset;

    address public governor;
    address public pendingGovernor;

    bool internal initFlag;
    uint256 private _lastProcessed;
    bool private _isDistributing;

    address[] private _gauges;

    constructor(address _pairFactory, address _voter, address _gov) {
        governor = _gov;

        pairFactory = IPairFactory(_pairFactory);
        voter = IVoter(_voter);
        batchSize = 20;
        interval = EPOCH_DURATION;
        intervalOffset = 10 minutes;

    }

    function checker() external view returns (bool canExec, bytes memory execPayload) {
        canExec = _isDistributing;
        if (!canExec) {
            uint256 endOfInterval = (block.timestamp / interval) * interval + interval;
            uint256 distributionStartTime = endOfInterval - intervalOffset;
            canExec = block.timestamp > distributionStartTime && _lastProcessed < distributionStartTime;
            if (canExec) {
                address[] memory gauges = _getGauges();
                canExec = gauges.length > 0;
            }
        }
        if (canExec) {
            execPayload = abi.encodeWithSelector(FeeDistributor.distribute.selector);
        } else {
            execPayload = "0x";
        }
    }

    function distribute() external {
        if (!_isDistributing) {
            _gauges = _getGauges();
            _isDistributing = _gauges.length > 0;
        }
        if (_isDistributing) {
            uint256 numGauges = _gauges.length;
            if (numGauges > batchSize) {
                numGauges = batchSize;
            }
            address[] memory gauges = new address[](numGauges);
            while (numGauges > 0) {
                unchecked {
                    --numGauges;
                }
                gauges[numGauges] = _gauges[_gauges.length - 1];
                _gauges.pop();
            }
            voter.distributeFees(gauges);
            _isDistributing = _gauges.length > 0;
            _lastProcessed = block.timestamp;
        }
    }

    function setBatchSize(uint256 _batchSize) external {
        require(msg.sender == governor);
        require(_batchSize != 0, "batch size can not be 0");
        batchSize = _batchSize;
    }

    function setInterval(uint256 _interval) external {
        require(msg.sender == governor);
        require(_interval >= 1 hours && _interval <= EPOCH_DURATION, "invalid interval");
        interval = _interval;
    }

    function setIntervalOffset(uint256 _offset) external {
        require(msg.sender == governor);
        require(_offset > 0 && _offset < interval, "invalid interval offset");
        intervalOffset = _offset;
    }

    function setPairFactory(address _pairFactory) external {
        require(msg.sender == governor);
        require(_pairFactory != address(0));
        pairFactory = IPairFactory(_pairFactory);
    }

    function setVoter(address _voter) external {
        require(msg.sender == governor);
        require(_voter != address(0));
        voter = IVoter(_voter);
    }

    function _getGauges() internal view returns (address[] memory gauges) {
        uint256 numPairs = pairFactory.allPairsLength();
        address[] memory tmpGauges = new address[](numPairs);
        uint256 numGauges = 0;
        for (uint256 i = 0; i < numPairs; ) {
            address pair = pairFactory.allPairs(i);
            address gauge = voter.gauges(pair);
            if (gauge != address(0)) {
                (bool success, bytes memory result) = address(voter).staticcall(abi.encodeWithSignature("isAlive(address)", gauge));
                if (success && abi.decode(result, (bool))) {
                    tmpGauges[numGauges] = gauge;
                    unchecked {
                        ++numGauges;
                    }
                }
            }
            unchecked {
                ++i;
            }
        }
        gauges = new address[](numGauges);
        for (uint256 i = 0; i < numGauges; ) {
            gauges[i] = tmpGauges[i];
            unchecked {
                ++i;
            }
        }
    }

    function setGovernor(address _pendingGov) external {
        require(msg.sender == governor);
        pendingGovernor = _pendingGov;
    }

    function acceptGovernor() external {
        require(msg.sender == pendingGovernor);
        governor = pendingGovernor;
    }
}
