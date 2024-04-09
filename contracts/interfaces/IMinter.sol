// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IMinter {
    function update_period() external returns (uint256);

    function check() external view returns (bool);

    function period() external view returns (uint256);

    function active_period() external view returns (uint256);

    function calculate_emission() external view returns (uint256);

    function calculate_growth(uint256 _weeklyMinted) external view returns (uint256);
}
