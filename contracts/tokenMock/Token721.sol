// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract TokenERC721 is ERC721, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("LeQuangDuy", "LQD") {
        nextTokenId = 1;
    }

    function mint(address to) external onlyOwner {
        _mint(to, nextTokenId);
        nextTokenId++;
    }

    function burn(uint256 tokenId) external {
        _burn(tokenId);
    }
}
