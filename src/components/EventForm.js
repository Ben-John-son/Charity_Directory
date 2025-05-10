'use client';

import { useRouter } from 'next/navigation';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createEvent, updateEvents } from '../api/eventAPI';
import { useAuth } from '../utils/context/authContext';

const initalState = {
  name: '',
  image: '',
  description: '',
  street: '',
  city: '',
  zip: '',
  state: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  date: '',
};

function EventForm({ obj = initalState }) {
  const [eventInput, setEventInput] = useState(obj);
  const router = useRouter();
  const { user } = useAuth();

  const path = window.location.pathname; // e.g., "/events/new/6"
  const pathSegments = path.split('/'); // ["", "events", "new", "6"]
  const idCharity = pathSegments[pathSegments.length - 1]; // "6"

  useEffect(() => {
    if (obj.id) setEventInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /* const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const idCharity = pathname.split('/').pop(); // Gets the last part of the URL
  console.log('Extracted idCharity:', idCharity); */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateEvents(eventInput).then(() => router.push(`/events/${idCharity}`));
    } else {
      const payload = { ...eventInput, userUid: user.uid, charityId: idCharity };
      createEvent(payload).then(() => {
        router.push(`/events/${idCharity}`);
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="image" name="image" value={eventInput.image} onChange={handleChange} required />
        <Form.Label>Event Name</Form.Label>
        <Form.Control type="text" placeholder="name" name="name" value={eventInput.name} onChange={handleChange} required />
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" value={eventInput.description} onChange={handleChange} required />
        <Form.Label>Contact Name</Form.Label>
        <Form.Control type="text" placeholder="name" name="contactName" value={eventInput.contactName} onChange={handleChange} required />
        <Form.Label>Contact Phone</Form.Label>
        <Form.Control type="text" placeholder="phone" name="contactPhone" value={eventInput.contactPhone} onChange={handleChange} required />
        <Form.Label>street</Form.Label>
        <Form.Control type="text" placeholder="street" name="street" value={eventInput.street} onChange={handleChange} required />
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="city" name="city" value={eventInput.city} onChange={handleChange} required />
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="state" name="state" value={eventInput.state} onChange={handleChange} required />
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="zip" name="zip" value={eventInput.zip} onChange={handleChange} required />
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="date" name="date" value={eventInput.date} onChange={handleChange} required />
        <Form.Label>Contact Email</Form.Label>
        <Form.Control type="email" placeholder="email" name="contactEmail" value={eventInput.contactEmail} onChange={handleChange} required />
      </Form.Group>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.charityId ? 'Update' : 'Create'} Event</Button>
    </Form>
  );
}

EventForm.propTypes = {
  obj: PropTypes.shape({
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
    id: PropTypes.string.isRequired,
  }),
  // params: PropTypes.objectOf({}).isRequired,
};
export default EventForm;
