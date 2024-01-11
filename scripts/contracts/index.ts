import { ethers } from "hardhat";
import {
  TokenExample,
  Pokeball
} from "../../typechain";
import { getAllAddresses } from "../address/handleAddress";

export const getContracts = async (chainId: any) => {
  const {
    tokenAddress,
    pokeballAddress
  } = getAllAddresses(chainId);

  let token, pokeball;

  token = (await ethers.getContractAt(
    "TokenExample",
    tokenAddress
  )) as TokenExample;

  pokeball = (await ethers.getContractAt(
    "Pokeball",
    pokeballAddress
  )) as Pokeball;

  return { token , pokeball }; 
};
