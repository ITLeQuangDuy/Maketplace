// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";

import "@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

import "@openzeppelin/contracts-upgradeable/interfaces/IERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/interfaces/IERC1155Upgradeable.sol";
//import "@openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155ReceiverUpgradeable.sol";
//import "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721ReceiverUpgradeable.sol";

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "hardhat/console.sol";

contract Maketplace is
    OwnableUpgradeable,
    PausableUpgradeable,
    ReentrancyGuardUpgradeable
{
    struct Listing {
        address seller;
        address nft;
        uint256 tokenId;
        uint256 amount;
        uint256 price;
    }

    mapping(uint256 => Listing) public listings;

    uint256 public nextListingId;

    uint256 public listingFee;
    uint256 public buyerFee;
    uint256 public unListingFee;

    bytes4 public constant ERC1155_INTERFACE_ID = 0xd9b67a26;
    bytes4 public constant ERC721_INTERFACE_ID = 0x80ac58cd;

    event NFTListed(
        address seller,
        uint256 tokenId,
        uint256 amount,
        uint256 price,
        bool isListing
    );

    event NFTUnlisted(address userAddress, uint256 listingId);

    event NFTSold();

    function initialize() public initializer {
        __Pausable_init_unchained();
        __Ownable_init_unchained();
        __ReentrancyGuard_init_unchained();
    }

    function setFee(uint256 _listingFee, uint256 _buyerFee, uint256 _unListingFee) external onlyOwner{
        listingFee = _listingFee;
        buyerFee = _buyerFee;
        unListingFee = _unListingFee;
    }

    // function getFee() public view returns(uint256, uint256, uint256){
    //     return (listingFee, unListingFee, buyerFee);
    // }

    function listing(
        address _addrNft,
        uint256 _tokenId,
        uint256 _amount,
        uint256 _price
    ) external payable whenNotPaused nonReentrant {
        require(msg.value == listingFee, "Invalid listing fee");
        require(_amount > 0, "Amount must be greater than 0");

        transferNft( _addrNft, msg.sender, address(this), _tokenId, _amount);
        //console.log(2);
        listings[nextListingId] = Listing({
            seller: msg.sender,
            nft: _addrNft,
            tokenId: _tokenId,
            amount: _amount,
            price: _price // /1 nft
        });

        nextListingId++;

        emit NFTListed(msg.sender, _tokenId, _amount, _price, true);
    }

    function unListing(
        uint256 _listingId
    ) public payable whenNotPaused nonReentrant {
        Listing memory _listing = listings[_listingId];
        require(_listing.seller != address(0), "ID not seller");
        require(msg.value == unListingFee, "Invalid unlisting fee");
        require(_listing.seller == msg.sender, "NFT not seller");

        transferNft(
            _listing.nft,
            address(this),
            _listing.seller,
            _listing.tokenId,
            _listing.amount
        );

        emit NFTUnlisted(msg.sender, _listingId);

        delete listings[_listingId];
    }

    function buyNft(
        uint256 _listingId,
        uint256 _amount
    ) external payable whenNotPaused nonReentrant {
        require (msg.value == buyerFee, "Invalid buy NFT fee");
        Listing memory _listing = listings[_listingId];
        require(_listing.seller != address(0), "NFT not listed");
        //require(amount > 0 && amount <= _listing.amount, "Invalid amount");
        require(_amount > 0, "Amount > 0");
        require(_amount <= _listing.amount, "Invalid amount");
        
        uint256 price = _listing.price * _amount;
        
        transferToken(_listing.nft, address(this), msg.sender, price);
        
        transferNft(
            _listing.nft,
            address(this),
            msg.sender,
            _listing.tokenId,
            _listing.amount
        );

        // Update listing
        _listing.amount = _listing.amount - _amount;
        if (_listing.amount == 0) {
            delete listings[_listingId];
            emit NFTUnlisted(msg.sender, _listingId);
        }

        emit NFTSold();
    }

    function transferNft(
        address nft,
        address from,
        address to,
        uint256 tokenId,
        uint256 amount
    ) internal {
        require(amount > 0, "Amount > 0");
        if (IERC165Upgradeable(nft).supportsInterface(ERC721_INTERFACE_ID)) {
            require(amount == 1, "Amount erc721 == 1");
            IERC721Upgradeable(nft).safeTransferFrom(from, to, tokenId);
        } else if (
            IERC165Upgradeable(nft).supportsInterface(ERC1155_INTERFACE_ID)
        ) {
            IERC1155Upgradeable(nft).safeTransferFrom(
                from,
                to,
                tokenId,
                amount,
                ""
            );
        }
    }

    function transferToken(
        address addrToken,
        address from,
        address to,
        uint256 amount
    ) internal {
        require(amount > 0, "Amount > 0");
        IERC20Upgradeable(addrToken).transferFrom(from, to, amount);
    }

    //function rescueStuck
    function rescueStuck() external onlyOwner {

    }

    //======================================FUNCTION RECEEIVER========================================
    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure returns (bytes4) {
        return this.onERC721Received.selector;
    }

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes calldata
    ) public pure returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] calldata,
        uint256[] calldata,
        bytes calldata
    ) external pure returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }
}
