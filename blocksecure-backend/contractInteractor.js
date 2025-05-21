require("dotenv").config();
const { ethers } = require("ethers");

// Contract ABI (generated from your Solidity contract)
const abi = [
  "function logEvent(string eventType, string status, string timestamp, string committer) public",
];

const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);

// Call function to log an event
async function logDeployment({ eventType, status, timestamp, committer }) {
  try {
    const tx = await contract.logEvent(eventType, status, timestamp, committer);
    await tx.wait();
    console.log("✅ Event logged on-chain:", tx.hash);
    return tx.hash;
  } catch (err) {
    console.error("❌ Error logging event:", err);
    throw err;
  }
}

module.exports = { logDeployment };
