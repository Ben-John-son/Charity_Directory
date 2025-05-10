'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import EventCard from '@/components/EventCard';
import { getEvents } from '@/api/eventAPI';

function Events() {
  const [events, setEvents] = useState([]);
  const router = useRouter();
  const { query } = router;
  const idCharity = query?.id; // This assumes your route is like /events/[id]

  const getAllEvents = () => {
    getEvents().then(setEvents);
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="addEventBtn">
        {idCharity && (
          <Link href={`/events/new/${idCharity}`} passHref>
            <Button>Add an Event</Button>
          </Link>
        )}
      </div>
      <div className="d-flex flex-wrap" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center' }}>
        {events === 'There are no events attached to this charity.' ? <h1>No Events Yet</h1> : events?.map((event) => <EventCard key={event.id} eventObj={event} onUpdate={getAllEvents} />)}
      </div>
    </div>
  );
}

export default Events;
