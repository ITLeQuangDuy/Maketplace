import { Signer } from "ethers";
import { ethers, upgrades, network } from "hardhat";
import { getAllAddresses } from "../address/handleAddress";
import { getContracts } from "../contracts";

let [deployer, admin, user1, user2]: Signer[] = [];

async function main() {
  [deployer] = await ethers.getSigners();

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
