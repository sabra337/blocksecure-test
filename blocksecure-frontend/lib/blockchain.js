import { ethers } from "ethers";

const contractAddress = "0x436eec6AAAFF87D90E1C51cc122848A4253b156D";

const abi = [
  "event EventLogged(string eventType, string status, string timestamp, string committer, address indexed sender)"
];

export async function fetchLogs() {
  const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/9e2e095a1cd247dba91ebe053ea74470");
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const filter = contract.filters.EventLogged();
  const logs = await contract.queryFilter(filter);

  const enrichedLogs = await Promise.all(logs.map(async (log) => {
    const { eventType, status, timestamp, committer } = log.args;
    const block = await provider.getBlock(log.blockNumber);
    const realTimestamp = new Date(block.timestamp * 1000); // Convert Unix to JS date

    return {
      eventType,
      status,
      timestamp, // original string (optional)
      committer,
      txHash: log.transactionHash,
      blockTime: realTimestamp.toLocaleString() //  display this in frontend
    };
  }));

  return enrichedLogs;
}
