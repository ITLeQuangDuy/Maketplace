import { ALL } from "dns";
import { BigNumber, Signer } from "ethers";
import { ethers, network } from "hardhat";
import { getAllAddresses } from "./address/handleAddress";
import { getContracts } from "./contracts";

let deployer: Signer, admin: Signer, signer1: Signer, signer2: Signer;

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const GAME_ADMIN = ethers.utils.keccak256(
  ethers.utils.toUtf8Bytes("GAME_ADMIN")
);
// do something with contract  after deploy
const main = async () => {
  [deployer, admin, signer1, signer2] = await ethers.getSigners();

};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
