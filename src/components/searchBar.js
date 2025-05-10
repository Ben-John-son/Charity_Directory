import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // ✅ Font Awesome search icon (or any icon lib)
import { searchCharity } from '../api/charityAPI';
import { useSearch } from '../utils/context/SearchContext';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const { setResults } = useSearch();

  const handleChange = async (value) => {
    setInput(value);
    console.log('Searching for:', value); // ✅ ADD THIS
    if (value.trim() === '') {
      setResults([]);
      return;
    }

    try {
      const results = await searchCharity(value);
      console.log('Results:', results); // ✅ ADD THIS TOO
      setResults(results);
    } catch (error) {
      console.error('Error searching charities:', error);
      setResults([]);
    }
  };

  return (
    <form onSubmit={handleChange} className="d-flex align-items-center searchBar">
      <input type="text" placeholder="Search charities..." value={input} onChange={(e) => setInput(e.target.value)} className="form-control me-2" />
      <button type="submit" className="btn btn-outline-light" aria-label="Search" style={{ marginRight: '10px' }}>
        <FaSearch />
      </button>
    </form>
  );
}
