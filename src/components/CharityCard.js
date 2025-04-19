'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

export default function CharityCard({ charityObj }) {
  return (
    <div className="charityCard">
      <br />
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://cdn-icons-png.freepik.com/512/9548/9548191.png" />
        <Card.Body>
          <Card.Title>{charityObj.name}</Card.Title>
          <Card.Text>Charity Description</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{charityObj.contactPhone}</ListGroup.Item>
          <ListGroup.Item>
            {charityObj.street} {charityObj.city} {charityObj.state} {charityObj.zip}{' '}
          </ListGroup.Item>
          <ListGroup.Item>{charityObj.contactEmail}</ListGroup.Item>
          <ListGroup.Item>
            <Card.Link href="#">Events</Card.Link>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

CharityCard.propTypes = {
  charityObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    contactEmail: PropTypes.string.isRequired,
    contactPhone: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
};
