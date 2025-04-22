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

function CharityForm() {
  // const [charity, setCharity] = useState(obj)
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Charity Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
    </Form>
  );
}

export default CharityForm;
