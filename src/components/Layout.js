import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

export default function Layout({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state
  };

  return (
    <div>
      {/* Pass handleSearch to NavBar */}
      <NavBar onUpdate={handleSearch} />
      {/* Render the child components (e.g., AllMyCharities) */}
      {React.cloneElement(children, { searchQuery })}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
