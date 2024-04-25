// Eventcontainer.jsx
import React, { useState } from 'react';
import Eventfeed from './Eventfeed';
import './Eventcard.css'; // Import CSS file for styling

const initialEventsData = [
  {
    id: 1,
    title: 'Coffee Morning',
    date: '2024-03-20',
    time: '10:00 AM - 11:00 AM',
    location: 'Virtual',
    description: 'Join us for a casual chat over a cup of coffee.',
    imageUrl: '/assets/Events/prostate_health_men_coffee-1.jpg', // Ensure this is the correct path
    rsvp: { interested: 0, notInterested: 0 }
  },
  {
    id: 2,
    title: 'Yoga for Seniors',
    date: '2024-03-22',
    time: '3:00 PM - 4:00 PM',
    location: 'Zoom',
    description: 'Gentle yoga session suitable for seniors of all levels.',
    imageUrl: '/assets/Events/yoga-for-older-adults.jpg', // Add your image path here
    rsvp: { interested: 0, notInterested: 0  }
  },
  {
    id: 3,
    title: 'Book Club Meeting',
    date: '2024-03-25',
    time: '1:00 PM - 2:00 PM',
    location: 'Library Room 4',
    description: 'Discussing the latest book on our reading list.',
    imageUrl: '/assets/Events/images-2.jpeg', // Add your image path here
    rsvp: { interested: 0,notInterested: 0  }
  },
  {
    id: 4,
    title: 'Tech Talk: Future of AI',
    date: '2024-03-28',
    time: '5:00 PM - 6:30 PM',
    location: 'Conference Hall B',
    description: 'A deep dive into emerging AI technologies and their implications.',
    imageUrl: 'path-to-your-image/tech-talk.jpg', // Add your image path here
    rsvp: { interested: 0,notInterested: 0  }
  },
  {
    id: 5,
    title: 'Community Gardening',
    date: '2024-04-01',
    time: '9:00 AM - 11:00 AM',
    location: 'Community Park',
    description: 'Join us for a morning of gardening and community bonding.',
    imageUrl: 'path-to-your-image/gardening.jpg', // Add your image path here
    rsvp: { interested: 0,notInterested: 0  }
  },
  // ... add more events if needed
];

const Eventcontainer = () => {
  const [events, setEvents] = useState(initialEventsData);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (eventId) => {
    const selected = events.find(event => event.id === eventId);
    setSelectedEvent(selected);
  };

  const handleRsvpChange = (eventId, isInterested) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        const newInterestCount = isInterested ? event.rsvp.interested + 1 : event.rsvp.interested;
        const newNotInterestedCount = !isInterested ? event.rsvp.notInterested + 1 : event.rsvp.notInterested;
        return {
          ...event,
          rsvp: {
            interested: newInterestCount,
            notInterested: newNotInterestedCount
          }
        };
      }
      return event;
    }));
    if (selectedEvent && selectedEvent.id === eventId) {
      setSelectedEvent({
        ...selectedEvent,
        rsvp: {
          ...selectedEvent.rsvp,
          interested: isInterested ? selectedEvent.rsvp.interested + 1 : selectedEvent.rsvp.interested,
          notInterested: !isInterested ? selectedEvent.rsvp.notInterested + 1 : selectedEvent.rsvp.notInterested
        }
      });
    }
  };

  return (
    <div className="events-page">
      <h1 className="events-heading">Events</h1>
      <div className="events-layout">
        <div className="events-container">
          <Eventfeed events={events} onSelectEvent={handleEventSelect} />
        </div>
        {selectedEvent && (
          <div className="selected-event-detail">
            {/* Display selected event details */}
            <h2>{selectedEvent.title}</h2>
            {/* ... other event details ... */}
            <div>
              <button onClick={() => handleRsvpChange(selectedEvent.id, true)}>Interested</button>
              <button onClick={() => handleRsvpChange(selectedEvent.id, false)}>Not Interested</button>
              <p>Number of people interested in this event: {selectedEvent.rsvp.interested}</p>
            </div>
            <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="event-detail-image" />
          </div>
        )}
        {/* This container holds the two constant images */}
        <div className="constant-images-container">
          <img src={`${process.env.PUBLIC_URL}/assets/Events/coffee.jpeg`} alt="Side Image 1" className="side-image" />
          <img src={`${process.env.PUBLIC_URL}/assets/Events/Eventb.jpeg`} alt="Side Image 2" className="side-image" />
        </div>
      </div>
    </div>
  );
};

export default Eventcontainer;