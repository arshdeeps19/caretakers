// Eventfeed.jsx
import React from 'react';
import EventItem from './EventItem'; // Adjust this import according to your actual file structure

const Eventfeed = ({ events, onSelectEvent }) => {
  return (
    <div className="event-feed">
      {events.map(event => (
        <EventItem key={event.id} event={event} onSelectEvent={onSelectEvent} />
      ))}
    </div>
  );
};

export default Eventfeed;

