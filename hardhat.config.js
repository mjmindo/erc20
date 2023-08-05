require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
      gasPrice: 8000000000, // Customize the gas price
      gas: 12450000, // Customize the gas limit
      timeout: 2000000, // Customize the deployment timeout
    },
  },
};
