'use client';

import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';

// import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import CharityCard from '../components/CharityCard';
import { getCharities } from '../api/charityAPI';

function Home() {
  // TODO: Set a state for books
  const [charities, setCharities] = useState([]);
  const [quote, setQuote] = useState('');
  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  const getAllCharities = () => {
    getCharities().then(setCharities);
  };

  const displayQuote = () => {
    const arr = ["'Best website I've been to all day' -Jonah T.", "'I wish my wife was here to see this website, but she left me for some guy who sells used station wagons in Reno' -Ben J.", "'I was trying to find a website for chairs, this is not what I wanted' -Ron W.", "'It's Ok' -Brian S.", "'Hello? Hello??? Is this Google?' -Joan P."];
    const random = Math.floor(Math.random() * arr.length);
    setQuote(arr[random]);
  };

  useEffect(() => {
    getAllCharities();
    console.log(user);
  }, []);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          height: '90vh',
          padding: '10px',
          maxWidth: 'auto',
          marginTop: '100px',
          margin: '0 auto',
          background: '#D3F2E3',
          backgroundImage: 'url(https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          // Add your background image URL here
        }}
      >
        {/* <div
      className="text-center my-4"
      style={{
        height: '90vh',
        padding: '10px',
        maxWidth: 'auto',
        marginTop: '100px',
        margin: '0 auto',
        background: '#D3F2E3',
      }}
    > */}
        <div style={{ position: 'absolute', top: '250px', left: '20px', color: 'white', backgroundColor: 'salmon', width: '40%', opacity: '0.7', borderRadius: '10px', fontWeight: 'bold', filter: 'drop-shadow(0 40x 6px rgba(21, 1, 19, 0.1)!important)' }}>
          <h1>GiveHub</h1>
          <h3 style={{ color: 'white', opacity: '1' }}>Discover the charity that&apos;s right for you.</h3>
          <h4>With so many to choose from, GiveHub offers information and access to organizations catered to your needs.</h4>
          <h4 style={{ color: 'rgb(0, 107, 194)', fontWeight: 'bold', fontStretch: 'expanded' }}>Want to add an organization and let others know? You can do that on GiveHub!</h4>
        </div>
        <div>
          <h4 style={{ position: 'absolute', top: '550px', left: '20px', color: 'white', width: '40%', opacity: '0.7', borderRadius: '10px', fontWeight: 'bold', filter: 'drop-shadow(0 40x 6px rgba(21, 1, 19, 0.1)!important)' }}>&quot;GiveHub connected me to a charity that helped me with my crippling salvia addiction&quot;</h4>
          <h5 style={{ position: 'absolute', top: '608px', left: '20px', color: 'white', width: '40%', opacity: '0.7', borderRadius: '10px', fontWeight: 'bold', filter: 'drop-shadow(0 40x 6px rgba(21, 1, 19, 0.1)!important)' }}>-Max Jones</h5>
        </div>
        {/* <div className="addCharityBtn">
        <Link href="/charities/new" passHref>
          <Button>Add A Charity</Button>
        </Link>
      </div> */}
        <div style={{ marginLeft: '30%' }}>
          <Carousel interval={2000}>
            {charities.map((charity) => (
              <Carousel.Item key={charity.id}>
                <div className="d-flex justify-content-center" style={{ display: 'flex', justifyContent: 'center', padding: '3px', filter: 'drop-shadow(0 4px 6px rgba(45, 2, 40, 0.1))' }}>
                  <CharityCard charityObj={charity} onUpdate={getAllCharities} style={{ maxHeight: '150px' }} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {/* </div> */}
      </div>
      <div className="quotes" style={{ backgroundColor: 'lightblue', display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
        <h2 style={{ color: 'white' }}>Want to see what other people are saying about GiveHub?</h2>
        <Button style={{ marginTop: '20px' }} onClick={displayQuote}>
          User Testimony
        </Button>
        <div>
          <h4 style={{ color: 'white', marginTop: '20px' }}>{quote}</h4>
        </div>
      </div>
    </>
  );
}

export default Home;
