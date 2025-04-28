'use client';

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteEvent } from '../api/eventAPI';
import { useAuth } from '../utils/context/authContext';

export default function EventCard({ eventObj, onUpdate }) {
  const deleteThisEvent = () => {
    if (window.confirm(`Delete ${eventObj.name}?`)) {
      deleteEvent(eventObj.id).then(() => onUpdate());
    }
  };

  const { user } = useAuth();
  return (
    <div className="eventCard">
      <br />
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://cdn-icons-png.freepik.com/512/9548/9548191.png" />
        <Card.Body>
          <Card.Img variant="top" src={eventObj.image} />
          <Card.Title>{eventObj.name}</Card.Title>
          <Card.Text>{eventObj.description}</Card.Text>
          <Card.Text>{eventObj.date}</Card.Text>
          <Card.Text>{eventObj.street}</Card.Text>
          <Card.Text>{eventObj.city}</Card.Text>
          <Card.Text>{eventObj.state}</Card.Text>
          <Card.Text>{eventObj.zip}</Card.Text>
          <Card.Text>{eventObj.contactName}</Card.Text>
          <Card.Text>{eventObj.contactEmail}</Card.Text>
          <Card.Text>{eventObj.contactPhone}</Card.Text>
        </Card.Body>

        <Card.Body>
          {eventObj.userUid === user.uid && (
            <>
              <Link href={`/events/edit/${eventObj.id}`} passHref>
                <Button variant="primary" className="m-2">
                  EDIT
                </Button>
              </Link>
              <Button variant="danger" onClick={() => deleteThisEvent()}>
                DELETE
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

EventCard.propTypes = {
  eventObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    contactName: PropTypes.string.isRequired,
    contactEmail: PropTypes.string.isRequired,
    contactPhone: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    userUid: PropTypes.string.isRequired,
  }),
  onUpdate: PropTypes.func.isRequired,
};
