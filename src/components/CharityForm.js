'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import { createCharity, updateCharity } from '../api/charityAPI';

const initialState = {
  name: '',
  description: '',
  image: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  website: '',
  stars: 4,
  donations: '',
  owners: '',
};

function CharityForm({ obj = initialState }) {
  // const [charity, setCharity] = useState(obj)
  const [formInput, setFormInput] = useState(obj);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) setFormInput({ ...obj, charityId: obj.id });
    console.log(obj);
    // getCharities().then();
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateCharity(formInput).then(() => router.push(`/events/${obj.id}`));
    } else {
      const payload = { ...formInput, userUid: user.uid };
      if (formInput) {
        createCharity(payload).then(() => router.push(`/charities`));
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Charity</h2>

      <FloatingLabel controlId="floatingInput1" label="Charity Name" className="mb-3">
        <Form.Control type="text" placeholder="Charity Name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image URL" name="image" value={formInput.image} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Description" className="mb-3">
        <Form.Control type="text" placeholder="Description" name="description" value={formInput.description} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Street" className="mb-3">
        <Form.Control type="text" placeholder="Street" name="street" value={formInput.street} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="City" className="mb-3">
        <Form.Control type="text" placeholder="City" style={{ height: '100px' }} name="city" value={formInput.city} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="State" className="mb-3">
        <Form.Control type="text" placeholder="State" style={{ height: '100px' }} name="state" value={formInput.state} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Zip" className="mb-3">
        <Form.Control type="text" placeholder="Zip Code" style={{ height: '100px' }} name="zip" value={formInput.zip} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="contactName" className="mb-3">
        <Form.Control type="text" placeholder="Contact Name" style={{ height: '100px' }} name="contactName" value={formInput.contactName} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Email" className="mb-3">
        <Form.Control type="text" placeholder="Email" style={{ height: '100px' }} name="contactEmail" value={formInput.contactEmail} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Phone" className="mb-3">
        <Form.Control type="text" placeholder="Phone" style={{ height: '100px' }} name="contactPhone" value={formInput.contactPhone} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Website" className="mb-3">
        <Form.Control type="text" placeholder="State" style={{ height: '100px' }} name="website" value={formInput.website} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Owners" className="mb-3">
        <Form.Control type="text" placeholder="Owners" name="owners" value={formInput.owners} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Donations" className="mb-3">
        <Form.Control type="text" placeholder="Donations" name="donations" value={formInput.donations} onChange={handleChange} required />
      </FloatingLabel>
      {/* <FloatingLabel controlId="floatingTextarea" label="Stars" className="mb-3">
        <Form.Control type="text" placeholder="1-5" style={{ height: '100px' }} name="stars" value={formInput.stars} onChange={handleChange} required />
      </FloatingLabel> */}

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Charity</Button>
    </Form>
  );
}

CharityForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    contactName: PropTypes.string,
    contactEmail: PropTypes.string,
    contactPhone: PropTypes.string,
    website: PropTypes.string,
    userUid: PropTypes.string.isRequired,
    owners: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    donations: PropTypes.number.isRequired,
  }),
};

export default CharityForm;
