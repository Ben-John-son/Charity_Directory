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
        <Link href="/events/new" passHref>
          <Button>Add an Events</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {/* This function maps over Events here using EventCard component */}
        {events.map((event) => (
          <EventCard key={event.id} eventObj={event} onUpdate={getAllEvents} />
        ))}
      </div>
    </div>
  );
}

export default Events;
