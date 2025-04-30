import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

export default function SearchBar({ onUpdate }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() !== '') {
      // Simulate an API call or filtering logic
      onUpdate(query); // Pass the query to the parent component
    }
  };

  return (
    <Form className="d-flex">
      <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" value={searchQuery} onChange={handleSearch} />
    </Form>
  );
}

SearchBar.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};
