'use client';

import { useRouter } from 'next/router';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateEvents(eventInput).then(() => router.push(`/events/${obj.id}`));
    } else {
      const payload = { ...eventInput, uid: user.uid };
      createEvent(payload).then(({ name }) => {
        const patchPayload = { charityId: name };
        updateEvents(patchPayload).then(() => {
          router.push('/events');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="image" name="image" value={eventInput.image} onChange={handleChange} required />
        <Form.Label>Event Name</Form.Label>
        <Form.Control type="text" placeholder="name" name="image" value={eventInput.name} onChange={handleChange} required />
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" value={eventInput.description} onChange={handleChange} required />
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="phone" name="phone" value={eventInput.phone} onChange={handleChange} required />
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
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" name="email" value={eventInput.email} onChange={handleChange} required />
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
};
export default EventForm;
