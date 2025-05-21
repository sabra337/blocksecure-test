import EventItem from './EventItem';
import styles from './EventList.module.css';

export default function EventList({ events }) {
  return (
    <div className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}
