import styles from './EventItem.module.css';

export default function EventItem({ event }) {
  return (
<div className={styles.card}>
  <div><strong>Type:</strong> {event.eventType}</div>
  <div><strong>Status:</strong> {event.status}</div>
  <div><strong>When:</strong> {event.blockTime}</div>
  <div><strong>By:</strong> {event.committer}</div>
  <div><strong>Tx:</strong> <a href={`https://sepolia.etherscan.io/tx/${event.txHash}`} target="_blank">View</a></div>
</div>



  );
}
