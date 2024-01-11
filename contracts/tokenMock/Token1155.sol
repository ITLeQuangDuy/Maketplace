// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenERC1155 is ERC1155, Ownable {
    constructor() ERC1155("") {}

    function mint(
        address to,
        uint256 tokenId,
        uint256 amount,
        bytes memory data
    ) external onlyOwner {
        _mint(to, tokenId, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) external onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    function burn(address from, uint256 id, uint256 amount) external onlyOwner {
        _burn(from, id, amount);
    }

    function burnBatch(
        address from,
        uint256[] memory ids,
        uint256[] memory amounts
    ) external {
        _burnBatch(from, ids, amounts);
    }
}
