// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IVoter {
    function _ve() external view returns (address);

    function governor() external view returns (address);

    function gauges(address _pair) external view returns (address);

    function factory() external view returns (address);

    function minter() external view returns (address);

    function emergencyCouncil() external view returns (address);

    function emitDeposit(uint256 _tokenId, address account, uint256 amount) external;

    function emitWithdraw(uint256 _tokenId, address account, uint256 amount) external;

    function isWhitelisted(address token) external view returns (bool);

    function notifyRewardAmount(uint256 amount) external;

    function distributeFees(address[] memory _gauges) external;

    function distributeAll() external;

    function distribute(uint256 start, uint256 finish) external;

    function distribute(address[] memory _gauges) external;

    function internal_bribes(address _gauge) external view returns (address);

    function external_bribes(address _gauge) external view returns (address);

    function totalWeightAt(uint256 _time) external view returns (uint256);

    function totalWeight() external view returns (uint256);

    function weights(address _pair) external view returns (uint256);

    function _epochTimestamp() external view returns (uint256);

    function lastVoted(uint256 id) external view returns (uint256);

    function poolVote(uint256 id, uint256 _index) external view returns (address _pair);

    function votes(uint256 id, address _pool) external view returns (uint256 votes);

    function poolVoteLength(uint256 tokenId) external view returns (uint256);

    function length() external view returns (uint256);

    function getIncentivizedPools() external view returns (address[] memory);

    function isBribe(address _bribe) external view returns (bool);

    function reset(uint256 _tokenId) external;

    function poke(uint256 _tokenId) external;
}