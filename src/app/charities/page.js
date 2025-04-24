'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

// import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import CharityCard from '../../components/CharityCard';
import { getCharities } from '../../api/charityAPI';

function Home() {
  // TODO: Set a state for books
  const [charities, setCharities] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  const getAllCharities = () => {
    getCharities().then(setCharities);
  };

  useEffect(() => {
    getAllCharities();
    console.log(user);
  }, []);

  return (
    <div className="text-center my-4">
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
  );
}

export default Home;
