import { Signer } from "ethers";
import { ethers, upgrades, network } from "hardhat";
import { getAllAddresses } from "../address/handleAddress";
import { getContracts } from "../contracts";


let [deployer, admin, user1, user2]: Signer[] = [];
//do something with contract after deploy
const doSomething = async () => {
  const { tokenAddress } = getAllAddresses(
    network.config.chainId?.toString()
  );
  const {token} = await getContracts(network.config.chainId); 

  await token.connect(deployer).mint(await deployer.getAddress(), ethers.utils.parseEther("123"));
};


async function main() {
    [deployer] = await ethers.getSigners();

    await doSomething();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
