import { getContractFactory } from "@nomiclabs/hardhat-ethers/types";
import { deploy } from "@openzeppelin/hardhat-upgrades/dist/utils";
import { expect } from "chai";
import { error } from "console";
import { Signer } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { ethers, network, upgrades } from "hardhat";
import {
  Maketplace,
  TokenERC721,
  TokenERC1155,
  TokenERC20,
} from "../typechain";
import { createRandomTable } from "../config/wiki";
import { connect } from "http2";

const batchTxsToBlock = async (callback: any) => {
  await network.provider.send("evm_setAutomine", [false]);
  await callback();
  await network.provider.request({
    method: "evm_mine",
  });
  await network.provider.send("evm_setAutomine", [true]);
};

const increaseTime = async (ms: number) => {
  await network.provider.send("evm_increaseTime", [ms]);
  await network.provider.send("evm_mine");
};

const randomTable = createRandomTable([900, 50, 30, 19, 1]);
const SECOND_IN_HOUR = 3600;

let signers: Signer[];
let maketplace: Maketplace;
let tokenERC20: TokenERC20;
let tokenERC721: TokenERC721;
let tokenERC1155: TokenERC1155;

const users: string[] = [];

let deployer: Signer;
let admin: Signer;

const UINT_MAX = ethers.constants.MaxUint256;

const GAME_ADMIN = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("GAME_ADMIN")
);

const PRICE_UPDATER = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("PRICE_UPDATER")
);

const setupAccount = async () => {
  signers = await ethers.getSigners();
  [deployer, admin] = signers.slice(signers.length - 2);
  for (let i = 1; i <= 15; i++) {
    users[i] = await signers[i].getAddress();
  }
};

const etherTimestamp = async () => {
  const currentBlock = await ethers.provider.getBlockNumber();
  return (await ethers.provider.getBlock(currentBlock)).timestamp;
};

const getCurrentDate = async () => {
  let currentTime = await etherTimestamp();
  currentTime *= 1000;
  const currentDate = new Date(currentTime);
  return (
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ", " +
    currentDate.toDateString()
  );
};

describe("Maketplace", () => {
  it("Deploy", async () => {
    signers = await ethers.getSigners();

    for (let i = 1; i < 15; i++) {
      users[i] = await signers[i].getAddress();
    }

    deployer = signers[19];

    //deploy token erc20
    const TokenERC20Fac = (
      await ethers.getContractFactory("TokenERC20")
    ).connect(deployer);
    tokenERC20 = await TokenERC20Fac.deploy();

    //deploy token erc721
    const TokenERC721Fac = (
      await ethers.getContractFactory("TokenERC721")
    ).connect(deployer);
    tokenERC721 = await TokenERC721Fac.deploy();

    //deploy tokeen erc1155
    const TokenERC1155Fac = (
      await ethers.getContractFactory("TokenERC1155")
    ).connect(deployer);
    tokenERC1155 = await TokenERC1155Fac.deploy();

    //deploy maketplace
    const MaketplaceFac = await (
      await ethers.getContractFactory("Maketplace")
    ).connect(deployer);
    maketplace = (await upgrades.deployProxy(MaketplaceFac, [])) as Maketplace;
  });

  it("Setup", async () => {
    const addressDeployer = await deployer.getAddress();
    const addressMaketplace = maketplace.address;

    await maketplace.connect(deployer).setPercentFee(10);
    await tokenERC20
      .connect(deployer)
      .mint(addressMaketplace, ethers.utils.parseEther("10"));
    //await tokenERC721.connect(deployer).mint(addressDeployer);
    //console.log("Balance of token ERC1155:",await tokenERC1155.balanceOf(users[1], 1));
    //expect (await tokenERC1155.balanceOf(users[1], 1)).to.equal(10);

    for (let i = 1; i <= 10; i++) {
      await tokenERC721.connect(deployer).mint(users[i]);
      await tokenERC1155.connect(deployer).mint(users[i], i, 10, "0x");
      //console.log("Balance of token ERC721:", await tokenERC721.balanceOf(users[i]));
      //console.log("Balance of token ERC1155:", await tokenERC1155.balanceOf(users[i], i));
      expect(await tokenERC721.balanceOf(users[i])).to.equal(1);
      expect(await tokenERC1155.balanceOf(users[i], i)).to.equal(10);
    }
    await tokenERC1155.connect(deployer).mint(addressDeployer, 1, 10, "0x");

    expect(await tokenERC1155.balanceOf(addressDeployer, 1)).to.equal(10);
  });

  it("Set fee", async () => {
    const listingFee = 1;
    const unListingFee = 2;

    await maketplace.connect(deployer).setFee(listingFee, unListingFee);
  });

  it("Listing NFT Invalid listing fee", async () => {
    await expect(
      maketplace
        .connect(signers[1])
        .listing(
          tokenERC721.address,
          tokenERC20.address,
          1,
          1,
          ethers.utils.parseEther("1")
        )
    ).to.revertedWith("Invalid listing fee");
    await expect(
      maketplace
        .connect(signers[1])
        .listing(
          tokenERC721.address,
          tokenERC20.address,
          1,
          1,
          ethers.utils.parseEther("1"),
          { value: 2 }
        )
    ).to.revertedWith("Invalid listing fee");
  });

  it("Listing NFT Amount must be greater than 0", async () => {
    await expect(
      maketplace
        .connect(signers[1])
        .listing(
          tokenERC721.address,
          tokenERC20.address,
          1,
          0,
          ethers.utils.parseEther("1"),
          { value: 1 }
        )
    ).to.revertedWith("Amount must be greater than 0");
  });

  it("Listing NFT", async () => {
    const tokenUserBefore = await tokenERC721.balanceOf(users[1]);
    const tokenContractBefore = await tokenERC721.balanceOf(maketplace.address);

    await tokenERC721.connect(signers[1]).approve(maketplace.address, 1);
    await maketplace
      .connect(signers[1])
      .listing(
        tokenERC721.address,
        tokenERC20.address,
        1,
        1,
        ethers.utils.parseEther("1"),
        { value: 1 }
      );

    const tokenUserAfter = await tokenERC721.balanceOf(users[1]);
    const tokenContractAfter = await tokenERC721.balanceOf(maketplace.address);

    expect(tokenUserBefore).to.equal(tokenContractAfter.add(tokenUserAfter));
    expect(tokenContractBefore).to.equal(
      tokenUserBefore.sub(tokenContractAfter)
    );
  });

  it("UnListing NFT Invalid unlisting fee", async () => {
    await expect(maketplace.connect(signers[1]).unListing(2)).to.revertedWith(
      "ID not seller"
    );
    await expect(maketplace.connect(deployer).unListing(0)).to.revertedWith(
      "You not seller"
    );
    await expect(maketplace.connect(signers[1]).unListing(0)).to.revertedWith(
      "Invalid unlisting fee"
    );
  });

  it("UnListing", async () => {
    const tokenUserBefore = await tokenERC721.balanceOf(users[1]); //0
    const tokenContractBefore = await tokenERC721.balanceOf(maketplace.address); // 1

    await maketplace.connect(signers[1]).unListing(0, { value: 2 });

    const tokenUserAfter = await tokenERC721.balanceOf(users[1]); // 1
    const tokenContractAfter = await tokenERC721.balanceOf(maketplace.address); //0

    expect(tokenUserAfter).to.equal(tokenContractBefore.add(tokenUserBefore)); //1
    expect(tokenContractAfter).to.equal(
      tokenUserAfter.sub(tokenContractBefore)
    ); //0
  });

  it("BuyNFT 721", async () => {
    const addressDeployer = await deployer.getAddress();
    const addressMaketplace = maketplace.address;
    const tokenId = 1;
    const listedId = 2;
    //set FeeRecipient
    await maketplace.connect(deployer).setFeeRecipient(users[10]);
    //listed
    await tokenERC721.connect(signers[1]).approve(maketplace.address, 1);
    await maketplace
      .connect(signers[1])
      .listing(
        tokenERC721.address,
        tokenERC20.address,
        1,
        1,
        ethers.utils.parseEther("1"),
        { value: 1 }
      );

    //buy
    await tokenERC20
      .connect(deployer)
      .mint(addressDeployer, ethers.utils.parseEther("10"));
    await tokenERC20
      .connect(deployer)
      .approve(addressMaketplace, ethers.utils.parseEther("10"));

    const tokenErc20User1Before = await tokenERC20.balanceOf(users[1]);
    const tokenErc20FeeRecipientBefore = await tokenERC20.balanceOf(users[10]);
    const tokenErc20ContractBefore = await tokenERC20.balanceOf(
      addressMaketplace
    );
    const tokenErc721DeployerBefore = await tokenERC721.balanceOf(
      addressDeployer
    );
    const tokenErc721ContractBefore = await tokenERC721.balanceOf(
      addressMaketplace
    );

    await maketplace.connect(deployer).purchaseNFT(1);

    const tokenErc20User1After = await tokenERC20.balanceOf(users[1]);
    const tokenErc20FeeRecipientAfter = await tokenERC20.balanceOf(users[10]);
    const tokenErc20ContractAfter = await tokenERC20.balanceOf(
      addressMaketplace
    );
    const tokenErc721DeployerAfter = await tokenERC721.balanceOf(
      addressDeployer
    );
    const tokenErc721ContractAfter = await tokenERC721.balanceOf(
      addressMaketplace
    );

    //console.log(tokenErc721DeployerBefore,tokenErc721ContractBefore,tokenErc721DeployerAfter, tokenErc721ContractAfter);
    // console.log(tokenErc20DeployerBefore, tokenErc20DeployerAfter, tokenErc20User1After);
    // expect(tokenErc20DeployerBefore.sub(tokenErc20DeployerAfter)).to.equal(
    //   tokenErc20User1After
    // );
    //expect (tokenErc721User1After).to.equal(tokenErc721ContractBefore.sub(tokenErc721ContractAfter));
    expect(tokenErc721DeployerAfter).to.equal(
      tokenErc721ContractBefore.sub(tokenErc721ContractAfter)
    );
    expect(
      tokenErc20FeeRecipientAfter.sub(tokenErc20FeeRecipientBefore)
    ).to.equal(ethers.utils.parseEther("0.1"));
  });

  it("BuyNFT 1155", async () => {
    const addressDeployer = await deployer.getAddress();
    const addressMaketplace = maketplace.address;
    const tokenId = 1;
    const listedId = 2;

    //listed
    await tokenERC1155.connect(deployer).mint(users[2], 2, 10, "0x");
    await tokenERC1155
      .connect(signers[2])
      .setApprovalForAll(addressMaketplace, true);
    await maketplace
      .connect(signers[2])
      .listing(
        tokenERC1155.address,
        tokenERC20.address,
        2,
        5,
        ethers.utils.parseEther("4"),
        { value: 1 }
      );

    //buy
    const tokenErc20UserBefore = await tokenERC20.balanceOf(users[2]);
    const tokenErc20DeployerBefore = await tokenERC20.balanceOf(
      addressDeployer
    );
    const tokenErc20ContractBefore = await tokenERC20.balanceOf(
      addressMaketplace
    );
    const tokenErc20FeeRecipientBefore = await tokenERC20.balanceOf(users[10]);
    const tokenErc1155ContractBefore = await tokenERC1155.balanceOf(
      addressMaketplace,
      2
    );

    await maketplace.connect(deployer).purchaseNFT(2);

    const tokenErc20UserAfter = await tokenERC20.balanceOf(users[2]);
    const tokenErc20FeeRecipientAfter = await tokenERC20.balanceOf(users[10]);
    const tokenErc1155DeployerAfter = await tokenERC1155.balanceOf(
      addressDeployer,
      2
    );
    const tokenErc1155ContractAfter = await tokenERC1155.balanceOf(
      addressMaketplace,
      2
    );

    //console.log("balance token erc20:", tokenErc20UserBefore, tokenErc20DeployerBefore, tokenErc20UserAfter, tokenErc20DeployerAfter)
    // expect(tokenErc20DeployerBefore.sub(tokenErc20DeployerAfter)).to.equal(
    //   tokenErc20UserAfter
    // );
    expect(tokenErc1155DeployerAfter).to.equal(
      tokenErc1155ContractBefore.sub(tokenErc1155ContractAfter)
    );
    expect(
      tokenErc20FeeRecipientAfter.sub(tokenErc20FeeRecipientBefore)
    ).to.equal(ethers.utils.parseEther("0.4"));
  });

  it("User sell User buy", async () => {
    const addressDeployer = await deployer.getAddress();
    //console.log(users[3], await tokenERC721.ownerOf(3));
    await tokenERC20
      .connect(deployer)
      .mint(users[3], ethers.utils.parseEther("2"));
    await tokenERC20
      .connect(signers[3])
      .approve(maketplace.address, ethers.utils.parseEther("2"));
    await tokenERC721.connect(signers[3]).approve(maketplace.address, 3);
    //console.log(await tokenERC721.connect(signers[3]).getApproved(3), maketplace.address);
    await maketplace
      .connect(signers[3])
      .listing(
        tokenERC721.address,
        tokenERC20.address,
        3,
        1,
        ethers.utils.parseEther("2"),
        { value: 1 }
      );

    await expect(maketplace.connect(signers[3]).purchaseNFT(3)).to.revertedWith(
      "You are seller"
    );
  });

  it("Test Not enough Ether sent", async () => {
    await tokenERC721.connect(signers[4]).approve(maketplace.address, 4);
    const buyerBalancBefore = await ethers.provider.getBalance(
      maketplace.address
    );

    await maketplace
      .connect(signers[4])
      .listing(
        tokenERC721.address,
        ethers.constants.AddressZero,
        4,
        1,
        ethers.utils.parseEther("2"),
        { value: 1 }
      );
    const buyerBalanceAfter = await ethers.provider.getBalance(
      maketplace.address
    );

    await expect(maketplace.connect(deployer).purchaseNFT(4)).to.revertedWith(
      "Not enough Ether sent"
    );
  });

  it("Buy with BNB Not enough Ether sent", async () => {
    //price idlisted = 2 BNB
    await expect(maketplace.connect(deployer).purchaseNFT(4)).to.revertedWith(
      "Not enough Ether sent"
    );
    await expect(
      maketplace.connect(deployer).purchaseNFT(4, { value: 1 })
    ).to.revertedWith("Not enough Ether sent");
  });

  it("Buy with BNB", async () => {
    const addressDeployer = await deployer.getAddress();
    const feeRecipientBalanceBefore = await ethers.provider.getBalance(
      users[10]
    );
    const sellerBalancBefore = await ethers.provider.getBalance(users[4]);
    const balanceTokenErc721DeployerBefore = await tokenERC721.balanceOf(
      addressDeployer
    );

    await maketplace
      .connect(deployer)
      .purchaseNFT(4, { value: parseEther("2") });

    const feeRecipientBalanceAfter = await ethers.provider.getBalance(
      users[10]
    );
    const sellerBalancAfter = await ethers.provider.getBalance(users[4]);
    const balanceTokenErc721DeployerAfter = await tokenERC721.balanceOf(
      addressDeployer
    );

    expect(sellerBalancAfter.sub(sellerBalancBefore)).to.equal(
      ethers.utils.parseEther("1.8")
    );
    expect(feeRecipientBalanceAfter.sub(feeRecipientBalanceBefore)).to.equal(
      ethers.utils.parseEther("0.2")
    );
    expect(
      balanceTokenErc721DeployerAfter.sub(balanceTokenErc721DeployerBefore)
    ).to.equal(1);
  });
});
