const { ethers } = require("hardhat");

async function main() {
  try {
    // Get the contract owner
    const contractOwner = await ethers.getSigners();
    console.log(`Deploying contract from: ${contractOwner[0].address}`);

    // Hardhat helper to get the ethers contractFactory object
    const GonnaMakeIt = await ethers.getContractFactory('GonnaMakeIt');

    // Deploy the contract
    console.log('Deploying GonnaMakeIt...');
    const gonnaMakeIt = await GonnaMakeIt.deploy();
    // await gonnaMakeIt.waitForDeployment();
    // console.log(`GonnaMakeIt deployed to: ${gonnaMakeIt.address}`);
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});