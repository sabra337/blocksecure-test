const { ethers } = require("hardhat");

async function main() {
  const BlockSecure = await ethers.getContractFactory("BlockSecure");
  const contract = await BlockSecure.deploy();
  await contract.waitForDeployment(); 
  console.log("BlockSecure deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
