'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.
import React, { useEffect, useState } from 'react';
// import { useAuth } from '@/utils/context/authContext';
import { myCharities } from '../api/charityAPI';
import CharityCard from '../components/CharityCard';

function Home() {
  // TODO: Set a state for books
  const [charities, setCharities] = useState([]);

  // TODO: Get user ID using useAuth Hook
  // const { user } = useAuth();

  useEffect(() => {
    myCharities().then((data) => {
      const charitiesArray = Array.isArray(data) ? data : [data];
      setCharities(charitiesArray);
    });
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: 'auto',
        margin: '0 auto',
        background: '#D3F2E3',
      }}
    >
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {charities.map((charity) => {
            console.log('Rendering charity:', charity);
            return <CharityCard key={charity.id} charityObj={charity} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
