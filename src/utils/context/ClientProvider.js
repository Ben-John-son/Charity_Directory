// ClientProvider.js

'use client';

import PropTypes from 'prop-types';
import { AuthProvider } from '@/utils/context/authContext';
import ViewDirectorBasedOnUserAuthStatus from '@/utils/context/ViewDirector';
import { SearchProvider } from '@/utils/context/SearchContext'; // <-- Add this line

function ClientProvider({ children }) {
  return (
    <AuthProvider>
      <SearchProvider>
        {' '}
        {/* <-- Wrap children in SearchProvider */}
        <ViewDirectorBasedOnUserAuthStatus>{children}</ViewDirectorBasedOnUserAuthStatus>
      </SearchProvider>
    </AuthProvider>
  );
}

ClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientProvider;
