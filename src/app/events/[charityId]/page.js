'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// import Link from 'next/link';
// import { useAuth } from '../../utils/context/authContext';
import EventCard from '@/components/EventCard';
import { getEvents } from '@/api/eventAPI';

function Events({ params }) {
  // Set a state for Events
  const [events, setEvents] = useState([]);

  const { charityId } = params; // Extract charityId from params

  const getAllEvents = () => {
    getEvents(charityId).then(setEvents);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: 'auto',
        margin: '0 auto',
      }}
    >
      {/* This function maps over Events here using EventCard component */}
      {events.map((event) => (
        <EventCard key={event.id} eventObj={event} />
      ))}
    </div>
  );
}

Events.propTypes = {
  params: PropTypes.objectOf([]).isRequired,
};

export default Events;
