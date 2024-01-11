
Install Dependencies
If npx is not installed yet: npm install -g npx

Install packages: npm i

Compile Contracts
npx hardhat compile

Run Tests
npx hardhat test

Deploy
npx hardhat run scripts/deploy.ts

Verify contract
npx hardhat verify --network bsc_testnet 0x1445200bab6ca2962fa2c640ef9c70f56b754284 --contract contracts/Pokeball.sol:Pokeball.sol

 npx hardhat verify --network bsc_testnet 0xE1e12882c5f968F21Dcc3Ca7B5E372B2d1b93c6c
 --contract contracts/SalePokeball.sol:SalePokeball.sol