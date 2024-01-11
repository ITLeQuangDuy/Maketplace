import { Signer } from "ethers";
import { ethers, upgrades, network } from "hardhat";
import { getAllAddresses } from "./address/handleAddress";

let [deployer, admin, user1, user2]: Signer[] = [];


const upgradePokeball = async () => {
  const { pokeballAddress } = getAllAddresses(
    network.config.chainId?.toString()
  );

  [deployer] = await ethers.getSigners();

  const pokeballFac = await ethers.getContractFactory("Pokeball", deployer);

  await upgrades.upgradeProxy(pokeballAddress, pokeballFac);
};

async function main() {
    await upgradePokeball();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
