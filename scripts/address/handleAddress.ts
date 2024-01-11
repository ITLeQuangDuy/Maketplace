import path from "path";
import fs from "fs";

const pathToAddress = path.join(__dirname, "./address.json");

export const getAllAddresses = (chainId?: any) => {
  const addressFileContent = JSON.parse(
    fs.readFileSync(pathToAddress, "utf-8")
  );

  return addressFileContent[chainId];
};

export const getAddress = (contractName: string, chainId?: any) => {
  const addressFileContent = JSON.parse(
    fs.readFileSync(pathToAddress, "utf-8")
  );

  return addressFileContent[chainId][contractName];
};

export const setAddress = (
  contractName: string,
  address: string,
  chainId?: any
) => {
  const addressFileContent = JSON.parse(
    fs.readFileSync(pathToAddress, "utf-8")
  );

  addressFileContent[chainId][contractName] = address;

  fs.writeFileSync(pathToAddress, JSON.stringify(addressFileContent), "utf-8");
};
