// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Tokan is ERC20Burnable {
    constructor() ERC20("Tokan", "TKN") {
        minter = msg.sender;
    }

    address public minter;

    function setMinter(address _minter) external {
        require(msg.sender == minter);
        minter = _minter;
    }

    function mint(address account, uint256 amount) external returns (bool) {
        require(msg.sender == minter, "not allowed");
        _mint(account, amount);
        return true;
    }
}
