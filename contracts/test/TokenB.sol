// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenB is ERC20 {
    address public owner;

    constructor() ERC20("TokenB", "TB") {
        owner = msg.sender;
        uint256 supply = 1000000000 ether; // 1 billion supply
        _mint(msg.sender, supply);
    }
}