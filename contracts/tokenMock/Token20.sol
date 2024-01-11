// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenERC20 is ERC20{

    constructor()ERC20("LeQuangDuy","LQD"){}

    function mint(address account, uint256 amount) external{
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external{
        _burn(account, amount);
    }
}