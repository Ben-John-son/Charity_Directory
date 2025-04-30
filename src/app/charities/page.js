'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

// import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import CharityCard from '../../components/CharityCard';
import { getCharities } from '../../api/charityAPI';

function Home() {
  // TODO: Set a state for charities
  const [charities, setCharities] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  const getAllCharities = () => {
    getCharities().then(setCharities);
  };

  useEffect(() => {
    getAllCharities();
    console.log(user);
  }, [user]);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: 'auto',
        marginTop: '100px',
        margin: '0 auto',
        background: '#D3F2E3',
      }}
    >
      <div
        className="text-center my-4"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: 'auto',
          marginTop: '100px',
          margin: '0 auto',
          background: '#D3F2E3',
        }}
      >
        <div className="addCharityBtn">
          <Link href="/charities/new" passHref>
            <Button>Add A Charity</Button>
          </Link>
        </div>

        <div className="d-flex flex-wrap">
          {charities.map((charity) => (
            <CharityCard key={charity.id} charityObj={charity} onUpdate={getAllCharities} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
