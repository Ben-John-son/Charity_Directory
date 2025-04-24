'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

// import Link from 'next/link';
import { useAuth } from '../../../utils/context/authContext';
import CharityCard from '../../../components/CharityCard';
import { myCharities } from '../../../api/charityAPI';

function AllMyCharities() {
  // TODO: Set a state for books
  const [charities, setCharities] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  const getMyCharities = () => {
    myCharities(user.uid).then((data) => {
      const charitiesArray = Array.isArray(data) ? data : [data];
      setCharities(charitiesArray);
    });
  };

  useEffect(() => {
    if (user) {
      getMyCharities();
    }
  }, [user]);

  return (
    <div className="text-center my-4">
      <div className="addCharityBtn">
        <Link href="/charities/new" passHref>
          <Button>Add A Charity</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {charities.map((charity) => {
          console.log('Rendering charity:', charity);
          return <CharityCard key={charity.id} charityObj={charity} onUpdate={getMyCharities} />;
        })}
      </div>
    </div>
  );
}

export default AllMyCharities;
