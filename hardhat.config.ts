import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-tracer";
import "@openzeppelin/hardhat-upgrades";
import '@openzeppelin/hardhat-defender';

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    matic: {
      url: `https://apis.ankr.com/e22bfa5f5a124b9aa1f911b742f6adfe/c06bb163c3c2a10a4028959f4d82836d/polygon/full/main`,
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
    },
    bsc_testnet: {
      chainId: 97,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER_TESTNET!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
    },
    bsc: {
      chainId: 56,
      url: "https://bsc-dataseed.binance.org/",
      accounts: [process.env.PRIVATE_KEY_DEPLOYER!],
    },
    rinkeby: {
      chainId: 4,
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
    },
    goerli: {
      chainId: 5,
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
    },
    arbitrum_goerli: {
      chainId: 421613,
      url: "https://goerli-rollup.arbitrum.io/rpc",
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER_TESTNET!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
    },
    avalanche: {
      url: "https://speedy-nodes-nyc.moralis.io/6bf1e7bab3a3737839373df9/avalanche/testnet",
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
      chainId:43113,
    },
    bas_dev : {
      url: "https://rpc.dev-01.bas.ankr.com/",
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
      chainId:14000,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/7z572lXXuyfpl4wcS-faR81Oyobzb8Pj",
      accounts: [
        process.env.PRIVATE_KEY_DEPLOYER!,
        process.env.PRIVATE_KEY_ADMIN!,
        process.env.PRIVATE_KEY_USER1!,
        process.env.PRIVATE_KEY_USER2!,
      ],
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_APIKEY,
  },

};

export default config;