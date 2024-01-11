import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Signer } from "ethers";
import { ethers, upgrades, network } from "hardhat";
import {
  setAddress,
  getAddress,
  getAllAddresses,
} from "./address/handleAddress";

let [deployer, admin, user1, user2]: SignerWithAddress[] = [];

const deployToken = async () => {
  const TokenExample = await ethers.getContractFactory("TokenExample");
  const token = await TokenExample.deploy();
  await token.deployed();
  setAddress("tokenAddress", token.address, network.config.chainId);
}

const deployPokeball = async () => {
  const Fac = await ethers.getContractFactory("Pokeball");
  console.log(1);
  const pokeball = await upgrades.deployProxy(Fac,["http://localhost:8080/tokenuri/"]);
  console.log(2);

  await pokeball.deployed();
  console.log(3);
  setAddress("pokeballAddress", pokeball.address, network.config.chainId);
};

async function main() {
  [deployer] = await ethers.getSigners();

  // await deployToken();
  await deployPokeball();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
