'use client';

// import { useState } from 'react';
import Form from 'react-bootstrap/Form';

// const initialState = {
//   description: '',
//   image: '',
//   price: '',
//   sale: false,
//   title: '',
//   author_id: '',
// };

function EventForm() {
  // const [charity, setCharity] = useState(obj)
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="image" />
        <Form.Label>Event Name</Form.Label>
        <Form.Control type="text" placeholder="name" />
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="phone" />
        <Form.Label>street</Form.Label>
        <Form.Control type="text" placeholder="street" />
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="city" />
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="state" />
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="zip" />
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="date" />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" />
      </Form.Group>

      {/* SUBMIT BUTTON  
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Author</Button> */}
    </Form>
  );
}

export default EventForm;
