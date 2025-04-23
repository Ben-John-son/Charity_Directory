'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

// import Link from 'next/link';
// import { useAuth } from '../../utils/context/authContext';
import EventCard from '@/components/EventCard';
import { getEvents } from '@/api/eventAPI';

function Events({ params }) {
  // TODO: Set a state for books
  const [events, setEvents] = useState([]);

  // TODO: Get user ID using useAuth Hook
  // const { user } = useAuth();
  const { charityId } = params; // Extract charityId from params

  const getAllEvents = () => {
    getEvents(charityId).then(setEvents);
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
          <EventCard key={event.id} eventObj={event} />
        ))}
      </div>
    </div>
  );
}

Events.propTypes = {
  params: PropTypes.objectOf([]).isRequired,
};

export default Events;
