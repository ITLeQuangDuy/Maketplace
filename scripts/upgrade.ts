import { Signer } from "ethers";
import { ethers, upgrades, network } from "hardhat";
import { getAllAddresses } from "./address/handleAddress";

let [deployer, admin, user1, user2]: Signer[] = [];

const upgradeMaketplace = async () => {
  const { addressMaketplace } = getAllAddresses(
    network.config.chainId?.toString()
  );

  [deployer] = await ethers.getSigners();

  const maketplaceFac = await ethers.getContractFactory("Maketplace", deployer);

  await upgrades.upgradeProxy(addressMaketplace, maketplaceFac);
};

async function main() {
    await upgradeMaketplace();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
