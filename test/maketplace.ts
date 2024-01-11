import { getContractFactory } from "@nomiclabs/hardhat-ethers/types";
import { deploy } from "@openzeppelin/hardhat-upgrades/dist/utils";
import { expect } from "chai";
import { error } from "console";
import { Signer } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { ethers, network, upgrades } from "hardhat";
import { Maketplace, TokenERC721, TokenERC1155, TokenERC20 } from "../typechain";
import { createRandomTable } from "../config/wiki";

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
    const TokenERC20Fac = (await ethers.getContractFactory("TokenERC20")).connect(deployer);
    tokenERC20 = await TokenERC20Fac.deploy();

    //deploy token erc721
    const TokenERC721Fac = (await ethers.getContractFactory("TokenERC721")).connect(deployer);
    tokenERC721 = await TokenERC721Fac.deploy();

    //deploy tokeen erc1155
    const TokenERC1155Fac = (await ethers.getContractFactory("TokenERC1155")).connect(deployer);
    tokenERC1155 = await TokenERC1155Fac.deploy();

    //deploy maketplace
    const MaketplaceFac = await(await ethers.getContractFactory("Maketplace")).connect(deployer);
    maketplace = (await upgrades.deployProxy(MaketplaceFac, [])) as Maketplace;

    // const PokeballFac = await (
    //   await ethers.getContractFactory("Pokeball")
    // ).connect(deployer);

    // pokeball = (await upgrades.deployProxy(PokeballFac, [
    //   "http://localhost:8080/tokenuri/",
    // ])) as Pokeball;
  });

  it("Setup", async () => {
    const addressDeployer = await deployer.getAddress();
    const addressMaketplace = maketplace.address;

    await tokenERC20.connect(deployer).mint(addressMaketplace, ethers.utils.parseEther("10"));
    //await tokenERC721.connect(deployer).mint(addressDeployer);
    //console.log("Balance of token ERC1155:",await tokenERC1155.balanceOf(users[1], 1));
    //expect (await tokenERC1155.balanceOf(users[1], 1)).to.equal(10);
    
    for(let i = 1; i <= 10; i ++){
      await tokenERC721.connect(deployer).mint(users[i]);
      await tokenERC1155.connect(deployer).mint(users[i], i, 10, "0x");
      //console.log("Balance of token ERC721:", await tokenERC721.balanceOf(users[i]));
      //console.log("Balance of token ERC1155:", await tokenERC1155.balanceOf(users[i], i));
      expect (await tokenERC721.balanceOf(users[i])).to.equal(1);
      expect (await tokenERC1155.balanceOf(users[i], i)).to.equal(10);
    }
    await tokenERC1155.connect(deployer).mint(addressDeployer, 1, 10, "0x");

    expect (await tokenERC1155.balanceOf(addressDeployer, 1)).to.equal(10);
  });

  it("Set fee", async () => {
    const listingFee = 1;
    const unListingFee = 2;
    const buyerFee = 3;

    await maketplace.connect(deployer).setFee(listingFee, buyerFee, unListingFee);
  });

  it("Listing NFT Invalid listing fee", async () => {
    await expect(maketplace.connect(signers[1]).listing(tokenERC721.address, 1, 1, ethers.utils.parseEther("1"))).to.revertedWith("Invalid listing fee");
    await expect(maketplace.connect(signers[1]).listing(tokenERC721.address, 1, 1, ethers.utils.parseEther("1"), {value: 2})).to.revertedWith("Invalid listing fee");
  });

  it("Listing NFT Amount must be greater than 0", async () => {
    await expect(maketplace.connect(signers[1]).listing(tokenERC721.address, 1, 0, ethers.utils.parseEther("1"), {value: 1})).to.revertedWith("Amount must be greater than 0");
  });

  it("Listing NFT", async () => {
    const tokenUserBefore = await tokenERC721.balanceOf(users[1]);
    const tokenContractBefore = await tokenERC721.balanceOf(maketplace.address);

    await tokenERC721.connect(signers[1]).approve(maketplace.address, 1);
    await maketplace.connect(signers[1]).listing(tokenERC721.address, 1, 1, ethers.utils.parseEther("1"), {value: 1});

    const tokenUserAfter = await tokenERC721.balanceOf(users[1]);
    const tokenContractAfter = await tokenERC721.balanceOf(maketplace.address);

    expect (tokenUserBefore).to.equal(tokenContractAfter.add(tokenUserAfter));
    expect (tokenContractBefore).to.equal(tokenUserBefore.sub(tokenContractAfter));
  });

  it("UnListing NFT Invalid unlisting fee", async () => {
    await expect(maketplace.unListing(1)).to.revertedWith("ID not seller");
    await expect(maketplace.unListing(0, {value: 1})).to.revertedWith("Invalid unlisting fee");
    await expect(maketplace.unListing(0, {value: 3})).to.revertedWith("Invalid unlisting fee");
    await expect(maketplace.connect(deployer).unListing(0, {value: 2})).to.revertedWith("NFT not seller");
  });

  it("UnListing", async () => {
    const tokenUserBefore = await tokenERC721.balanceOf(users[1]); //0
    const tokenContractBefore = await tokenERC721.balanceOf(maketplace.address);// 1
    
    await maketplace.connect(signers[1]).unListing(0, {value: 2});

    const tokenUserAfter = await tokenERC721.balanceOf(users[1]);// 1
    const tokenContractAfter = await tokenERC721.balanceOf(maketplace.address);//0
  
    expect (tokenUserAfter).to.equal(tokenContractBefore.add(tokenUserBefore));//1
    expect (tokenContractAfter).to.equal(tokenUserAfter.sub(tokenContractBefore));//0
  });

  it("BuyNFT", async () => {
    const tokenId = 1;
    const listedId = 2;
  
    //listed
    await tokenERC721.connect(signers[1]).approve(maketplace.address, 1);
    await maketplace.connect(signers[1]).listing(tokenERC721.address, 1, 1, ethers.utils.parseEther("1"), {value: 1});
    //buy
    console.log("asdsdas", await tokenERC721.ownerOf(1), users[1], maketplace.address)
    await maketplace.connect(deployer).buyNft(1, 1);
  });
});
