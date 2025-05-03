import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { searchCharity } from '../api/charityAPI';

export default function SearchBar({ onResults }) {
  const [input, setInput] = useState('');

  const handleChange = async (value) => {
    setInput(value);

    if (value.trim() === '') {
      // Clear results if input is empty
      onResults([]);
      return;
    }

    try {
      // Call the search API with the input value
      const results = await searchCharity(value);
      onResults(results);
    } catch (error) {
      console.error('Error searching charities:', error);
      onResults([]);
    }
  };

  return (
    <div className="searchBar">
      <input placeholder="Type to Search..." value={input} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

SearchBar.propTypes = {
  onResults: PropTypes.func.isRequired,
};
