'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

// import Link from 'next/link';
// import { useAuth } from '../../utils/context/authContext';
import CharityCard from '../../components/CharityCard';
import { getCharities } from '../../api/charityAPI';

function Home() {
  // TODO: Set a state for books
  const [charities, setCharities] = useState([]);

  // TODO: Get user ID using useAuth Hook
  // const { user } = useAuth();

  const getAllCharities = () => {
    getCharities().then(setCharities);
  };

  useEffect(() => {
    getAllCharities();
  }, []);

  return (
    <div className="text-center my-4">
      {/* <Link href="/book/new" passHref>
        <Button>Add A Book</Button>
      </Link> */}
      <div className="addCharityBtn">
        <Link href="/charities/new" passHref>
          <Button>Add A Charity</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {charities.map((charity) => (
          <CharityCard key={charity.id} charityObj={charity} />
        ))}
      </div>
    </div>
  );
}

export default Home;
