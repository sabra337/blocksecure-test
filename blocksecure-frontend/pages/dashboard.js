import { useEffect, useState } from "react";
import EventList from "../components/EventList";
import { fetchLogs } from "../lib/blockchain";

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchLogs();
      setEvents(data);
    }

    load();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Blockchain Deployment Events</h1>
      <EventList events={events} />
    </div>
  );
}
