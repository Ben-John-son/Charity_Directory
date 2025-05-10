'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// import Link from 'next/link';
// import { useAuth } from '../../utils/context/authContext';
import EventCard from '@/components/EventCard';
import { getEvents } from '@/api/eventAPI';
import { useAuth } from '@/utils/context/authContext';
import { Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { getSingleCharity } from '@/api/charityAPI';

function Events({ params }) {
  // Set a state for Events
  const [events, setEvents] = useState([]);
  const [charityInfo, setCharityInfo] = useState({}); // State to hold charity information

  const { charityId } = params; // Extract charityId from params

  const getAllEvents = () => {
    getEvents(charityId).then(setEvents);
  };

  const { user } = useAuth(); // may use this for user authentication in the future

  useEffect(() => {
    getAllEvents();
    getSingleCharity(charityId).then(setCharityInfo);
  }, []);

  return (
    <div className="text-center my-4">
      <div className="addEventBtn">
        {charityInfo.userUid === user.uid && (
          <Link href={`/events/new/${charityId}`} passHref>
            <Button>Add an Event</Button>
          </Link>
        )}
        <br />
      </div>
      <div className="d-flex flex-wrap">
        {/* This function maps over Events here using EventCard component */}
        {Array.isArray(events) && events.length === 0 ? (
          <div>
            <div>
              <Image src={charityInfo.image} style={{ width: '200px' }} />
              <br />
              <h2 style={{ fontWeight: 'bold' }}>{charityInfo.name}</h2>
              <br />
              <h2>{charityInfo.description}</h2>
              {/* <ul>{charityInfo.charityTags?.map((tagObj) => (
       <li key={tagObj.tag.id}>{tagObj.tag.name}</li>
    ))}
    </ul> */}
            </div>
            <h1 style={{ marginTop: '20px' }}>No Events Yet</h1>
            <br />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <Image src={charityInfo.image} style={{ width: '200px' }} />
            <br />
            <h2 style={{ fontWeight: 'bold' }}>{charityInfo.name}</h2>
            <br />
            <h2>{charityInfo.description}</h2>
            {/* <ul>{charityInfo.charityTags?.map((tagObj) => (
       <li key={tagObj.tag.id}>{tagObj.tag.name}</li>
    ))}
    </ul> */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', gap: '40px' }}>
              {events.map((event) => (
                <EventCard key={event.id} eventObj={event} onUpdate={getAllEvents} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Events.propTypes = {
  params: PropTypes.objectOf([]).isRequired,
};

export default Events;
