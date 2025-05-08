'use client';

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { deleteCharity } from '../api/charityAPI';

export default function CharityCard({ charityObj, onUpdate }) {
  const deleteThisCharity = () => {
    if (window.confirm(`Delete ${charityObj.name}?`)) {
      deleteCharity(charityObj.id).then(() => onUpdate());
    }
  };

  const { user } = useAuth();

  return (
    <div className="charityCard">
      <br />
      <Card style={{ width: '18rem', height: 'contain' }}>
        <Card.Img variant="top" src={charityObj.image} className="cardImage" />
        <Card.Body style={{ height: '44%', fontSize: '14px' }}>
          <Card.Title>{charityObj.name}</Card.Title>
          <Card.Text>{charityObj.description}</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{charityObj.contactPhone}</ListGroup.Item>
            <ListGroup.Item>
              {charityObj.street} {charityObj.city} {charityObj.state} {charityObj.zip}{' '}
            </ListGroup.Item>
            <ListGroup.Item>{charityObj.contactEmail}</ListGroup.Item>
            <ListGroup.Item>
              <Card.Link href={`events/${charityObj.id}`}>Events</Card.Link>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            {charityObj.charityTags.map((tagObj) => (
              <ListGroup.Item key={tagObj.tag.id}>{tagObj.tag.name}</ListGroup.Item>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            {charityObj.userUid === user.uid && (
              <>
                <Link href={`charities/edit/${charityObj.id}`} passHref>
                  <Button variant="primary" style={{ height: '1.8rem' }}>
                    EDIT
                  </Button>
                </Link>
                <Button variant="danger" onClick={deleteThisCharity} style={{ height: '1.8rem' }}>
                  DELETE
                </Button>
              </>
            )}
          </ListGroup.Item>
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
    id: PropTypes.string.isRequired,
    userUid: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    charityTags: PropTypes.string.isRequired,
  }),
  onUpdate: PropTypes.func.isRequired,
};
