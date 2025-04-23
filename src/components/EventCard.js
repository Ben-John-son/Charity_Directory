'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function EventCard({ eventObj }) {
  return (
    <div className="charityCard">
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
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
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
  }),
};
