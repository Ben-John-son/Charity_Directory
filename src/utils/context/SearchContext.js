// context/SearchContext.js
import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [results, setResults] = useState([]);

  // ✅ Memoize context value
  const value = useMemo(() => ({ results, setResults }), [results]);

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSearch = () => useContext(SearchContext);
