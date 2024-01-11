import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Signer } from "ethers";
import { ethers, upgrades, network } from "hardhat";
import {
  setAddress,
  getAddress,
  getAllAddresses,
} from "./address/handleAddress";

let [deployer, admin, user1, user2]: SignerWithAddress[] = [];

const deployTokenERC20 = async () => {
  const TokenERC20 = await ethers.getContractFactory("TokenERC20");
  const tokenERC20 = await TokenERC20.deploy();
  await tokenERC20.deployed();
  setAddress("tokenERC20Address", tokenERC20.address, network.config.chainId);
}

const deployTokenERC721 = async () => {
  const TokenERC721 = await ethers.getContractFactory("TokenERC721");
  const tokenERC721 = await TokenERC721.deploy();
  await tokenERC721.deployed();
  setAddress("tokenTokenERC721Address", tokenERC721.address, network.config.chainId);
}

const deployTokenERC1155 = async () => {
  const TokenERC1155 = await ethers.getContractFactory("TokenERC1155");
  const tokenERC1155 = await TokenERC1155.deploy();
  await tokenERC1155.deployed();
  setAddress("tokenTokenERC1155Address", tokenERC1155.address, network.config.chainId);
}

const deployMaketplace = async () => {
  const MaketplaceFac = await ethers.getContractFactory("Maketplace");
  const marketplace = await upgrades.deployProxy(MaketplaceFac,[]);

  await marketplace.deployed();
  setAddress("maketplaceAddress", marketplace.address, network.config.chainId);
};

async function main() {
  [deployer] = await ethers.getSigners();

  await deployTokenERC20();
  await deployTokenERC721();
  await deployTokenERC1155();
  console.log(1);
  await deployMaketplace();
  console.log("Done");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
