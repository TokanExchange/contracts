// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IGauge.sol";
import "../interfaces/IGaugeFactory.sol";
import "../Gauge.sol";

contract GaugeFactory is IGaugeFactory {
    address public last_gauge;
    address public governor;
    address public pendingGovernor;

    bool internal initFlag;

    constructor() {
        governor = msg.sender;
        initFlag = false;
    }

    function init(address _governor) public {
        require(msg.sender == governor);
        require(!initFlag, "already called init");
        initFlag = true;

        governor = _governor;
    }

    function createGauge(
        address _rewardToken,
        address _ve,
        address _token,
        address _distribution,
        address _internal_bribe,
        address _external_bribe,
        bool _isPair
    ) external returns (address) {
        last_gauge = address(
            new Gauge(
                _rewardToken,
                _ve,
                _token,
                _distribution,
                _internal_bribe,
                _external_bribe,
                _isPair
            )
        );
        return last_gauge;
    }

    function setDistribution(
        address _gauge,
        address _newDistribution
    ) external {
        require(msg.sender == governor);
        IGauge(_gauge).setDistribution(_newDistribution);
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
