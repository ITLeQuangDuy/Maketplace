// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";

import "@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

import "@openzeppelin/contracts-upgradeable/interfaces/IERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/interfaces/IERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/interfaces/IERC721ReceiverUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/interfaces/IERC1155ReceiverUpgradeable.sol";

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "hardhat/console.sol";

contract Maketplace is
    OwnableUpgradeable,
    PausableUpgradeable,
    ReentrancyGuardUpgradeable,
    IERC721ReceiverUpgradeable,
    IERC1155ReceiverUpgradeable
{
    struct Listing {
        address seller;
        address paymentToken;
        address nft;
        uint256 tokenId;
        uint256 amount;
        uint256 price;
    }

    mapping(uint256 => Listing) public listings;

    uint256 public nextListingId;

    uint256 public listingFee;
    uint256 public unListingFee;
    uint256 public percentFee;

    bytes4 public constant ERC1155_INTERFACE_ID = 0xd9b67a26;
    bytes4 public constant ERC721_INTERFACE_ID = 0x80ac58cd;

    event NFTListed(
        address seller,
        uint256 tokenId,
        uint256 amount,
        uint256 price
    );

    event NFTUnlisted(address userAddress, uint256 listingId);

    event NFTSold(address userAddress, uint256 listingId);

    function initialize() public initializer {
        __Pausable_init_unchained();
        __Ownable_init_unchained();
        __ReentrancyGuard_init_unchained();
    }

    //========================================OWNER FUNCTION============================================

    function setFee(
        uint256 _listingFee,
        uint256 _unListingFee
    ) external onlyOwner {
        listingFee = _listingFee;
        unListingFee = _unListingFee;
    }

    function setPercentFee(uint256 _percent) external onlyOwner {
        percentFee = _percent;
    }

    function rescueStuck(address token, uint256 amount) external onlyOwner {
        IERC20Upgradeable(token).transfer(msg.sender, amount);
    }

    //==========================================EXTERNAL FUNCTION========================================

    function listing(
        address _addrNft,
        address _paymentToken,
        uint256 _tokenId,
        uint256 _amount,
        uint256 _price
    ) external payable whenNotPaused nonReentrant {
        require(msg.value == listingFee, "Invalid listing fee");
        require(_amount > 0, "Amount must be greater than 0");

        listings[nextListingId] = Listing({
            seller: msg.sender,
            paymentToken: _paymentToken,
            nft: _addrNft,
            tokenId: _tokenId,
            amount: _amount,
            price: _price // /1 nft
        });

        transferNft(_addrNft, msg.sender, address(this), _tokenId, _amount);

        nextListingId++;

        emit NFTListed(msg.sender, _tokenId, _amount, _price);
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

    function purchaseNFT(
        uint256 _listingId
    ) external whenNotPaused nonReentrant {
        Listing memory _listing = listings[_listingId];
        console.log(nextListingId);
        require(_listing.seller != address(0), "NFT not listed");

        uint256 fee = (_listing.price * percentFee) / 100;
        uint256 actualPrice = _listing.price - fee;

        transferToken(_listing.paymentToken, msg.sender, address(this), fee);
        transferToken(
            _listing.paymentToken,
            msg.sender,
            _listing.seller,
            actualPrice
        );

        transferNft(
            _listing.nft,
            address(this),
            msg.sender,
            _listing.tokenId,
            _listing.amount
        );

        emit NFTSold(msg.sender, _listingId);

        delete listings[_listingId];
    }

    //=======================================INTERNAL FUNCTION============================================

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
        bool success = IERC20Upgradeable(addrToken).transferFrom(
            from,
            to,
            amount
        );
        require(success, "Transfer failed");
    }

    //======================================FUNCTION RECEEIVER========================================
    function supportsInterface(
        bytes4 interfaceId
    ) public pure override returns (bool) {
        return interfaceId == type(IERC165Upgradeable).interfaceId;
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external pure override returns (bytes4) {
        return IERC721ReceiverUpgradeable.onERC721Received.selector;
    }

    function onERC1155Received(
        address operator,
        address from,
        uint256 tokenId,
        uint256 value,
        bytes calldata data
    ) external pure override returns (bytes4) {
        return IERC1155ReceiverUpgradeable.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external pure override returns (bytes4) {
        return IERC1155ReceiverUpgradeable.onERC1155BatchReceived.selector;
    }
}
