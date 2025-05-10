/* eslint-disable padded-blocks */

'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import PropTypes from 'prop-types';
import { useAuth } from '@/utils/context/authContext';
import { createCharity, updateCharity } from '@/api/charityAPI';
import { getTags, deleteTags, createCharityTag } from '@/api/charityTagsAPI';

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
  stars: 0,
  donations: 0,
  owners: '',
  charityTags: [], // Initialize as an empty array
};

const initialCharityTags = {
  charityId: '',
  tagId: '',
};

function CharityForm({ obj = initialState }) {
  const [formInput, setFormInput] = useState({ ...initialState, ...obj, ...initialCharityTags });
  const [charityTags, setTags] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getTags().then(setTags);
    if (obj.id) {
      setFormInput({
        ...initialState,
        ...obj,
        charityTags: obj.charityTags.map((tag) => tag.tagId),
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Transform selected tags into an array of objects
    const transformedTags = formInput.charityTags.map((tagId) => ({
      tagId: parseInt(tagId, 10), // Ensure TagId is an integer
      charityId: obj.id, // Include CharityId if updating
    }));

    // Construct the payload
    const payload = {
      ...formInput,
      userUid: user.uid,
      charityTags: transformedTags, // Include the transformed tags
    };

    const clearTags = async () => {
      try {
        await deleteTags(obj.id); // Delete existing tags
        alert('Selection has been cleared!');
      } catch (error) {
        console.error('Error clearing tags:', error);
      }
    };

    try {
      if (obj.id) {
        // Update charity first
        await updateCharity(payload);
        console.log('Charity updated successfully:', payload);

        // After charity is updated, clear old tags
        await clearTags();

        // Create new tags after clearing old ones
        // eslint-disable-next-line no-use-before-define
        await Promise.all(transformedTags.map((tag) => createCharityTag(tag)));
        router.push(`/charities`);
        console.log('Updated charity and tags successfully');
      } else {
        await createCharity(payload);
        router.push(`/charities`);
      }
    } catch (error) {
      console.error('Error processing charity and tags:', error);
      alert('Failed to update or create charity. Please check the input and try again..');
    }
  };

  return (
    <div className="formDiv" style={{ width: '50%' }}>
      <Form onSubmit={handleSubmit} className="text-black">
        <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Charity</h2>
        <FloatingLabel controlId="floatingInput1" label="Charity Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Charity Name"
            name="name"
            value={formInput.name || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput2" label="Image" className="mb-3">
          <Form.Control
            type="url"
            placeholder="Enter an image URL"
            name="image"
            value={formInput.image || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput3" label="Description" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            value={formInput.description || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput1" label="Street" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Street"
            name="street"
            value={formInput.street || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="City" className="mb-3">
          <Form.Control
            type="text"
            placeholder="City"
            style={{ height: '100px' }}
            name="city"
            value={formInput.city || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="State" className="mb-3">
          <Form.Control
            type="text"
            placeholder="State"
            style={{ height: '100px' }}
            name="state"
            value={formInput.state || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="Zip" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Zip Code"
            style={{ height: '100px' }}
            name="zip"
            value={formInput.zip || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="contactName" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Contact Name"
            style={{ height: '100px' }}
            name="contactName"
            value={formInput.contactName || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="Email" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Email"
            style={{ height: '100px' }}
            name="contactEmail"
            value={formInput.contactEmail || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="Phone" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Phone"
            style={{ height: '100px' }}
            name="contactPhone"
            value={formInput.contactPhone || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="Website" className="mb-3">
          <Form.Control
            type="text"
            placeholder="State"
            style={{ height: '100px' }}
            name="website"
            value={formInput.website || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput2" label="Owners" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Owners"
            name="owners"
            value={formInput.owners || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput2" label="Donations" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Donations"
            name="donations"
            value={formInput.donations || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput2" label="Stars" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Stars"
            name="stars"
            value={formInput.stars || ''} // Fallback to an empty string
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* More form fields for other properties like address, contact info, etc. */}

        {/* CATEGORY MULTI-SELECT DROPDOWN */}
        <FloatingLabel controlId="multiSelectDropdown" label="Categories">
          <Form.Select
            aria-label="CharityTags"
            name="charityTags"
            onChange={(e) => {
              const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
              setFormInput((prevState) => ({
                ...prevState,
                charityTags: selectedOptions,
              }));
            }}
            className="mb-3"
            value={formInput.charityTags || []}
            multiple
          >
            {charityTags.map((tags) => (
              <option key={tags.id} value={tags.id}>
                {tags.name}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>

        {/* SUBMIT BUTTON */}
        <Button type="submit">{obj.id ? 'Update' : 'Create'} Charity</Button>
      </Form>
    </div>
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
    charityTags: PropTypes.arrayOf(
      PropTypes.shape({
        tagId: PropTypes.string.isRequired,
        charityId: PropTypes.string,
      }),
    ).isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default CharityForm;
