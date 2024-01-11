import { Signer } from "ethers";
import { ethers, upgrades, network } from "hardhat";
import { getAllAddresses } from "../address/handleAddress";
import { getContracts } from "../contracts";


let [deployer, admin, user1, user2]: Signer[] = [];
//do something after deploy
const setAdminSale = async () => {
  const { tokenAddress } = getAllAddresses(
    network.config.chainId?.toString()
  );
  const {pokeball} = await getContracts(network.config.chainId); 

  await pokeball.connect(deployer).addAdmin(tokenAddress);
};

async function main() {
  [deployer] = await ethers.getSigners();

  await setAdminSale();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
