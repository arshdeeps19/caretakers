// EventItem.jsx
import React from 'react';
import './EventItem.css'; // Import the SCSS file for EventItem

const EventItem = ({ event, onSelectEvent }) => {
  return (
    <div className="event-item" onClick={() => onSelectEvent(event.id)}>
      <h3>{event.title}</h3>
      <p>{event.date} - {event.time}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      {/* Remove any RSVP buttons from here */}
    </div>
  );
};
export default EventItem;
