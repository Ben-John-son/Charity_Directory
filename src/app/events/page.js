'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

// import Link from 'next/link';
// import { useAuth } from '../../utils/context/authContext';
import EventCard from '@/components/EventCard';
import { getEvents } from '@/api/eventAPI';

function Events() {
  // Set a state for Events
  const [events, setEvents] = useState([]);

  const path = window.location.pathname; // e.g., "/events/new/6"
  const pathSegments = path.split('/'); // ["", "events", "new", "6"]
  const idCharity = pathSegments[pathSegments.length - 1]; // "6"
  // may use this for user authentication in the future
  // const { user } = useAuth();

  const getAllEvents = () => {
    getEvents().then(setEvents);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="addEventBtn">
        <Link href={`/events/new/${idCharity}`} passHref>
          <Button>Add an Event</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {/* This function maps over Events here using EventCard component */}
        {events === 'There are no events attached to this charity.' ? <h1>No Events Yet</h1> : events?.map((event) => <EventCard key={event.id} eventObj={event} onUpdate={getAllEvents} />)}
      </div>
    </div>
  );
}

export default Events;
