'use client';

import { React, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { getCharities } from '../../api/charityAPI';
import CharityCard from '../../components/CharityCard';

export default function Categories() {
  const [charitiesByTags, setCharitiesByTags] = useState([]);
  const [showCharities, setShowCharities] = useState([]);

  useEffect(() => {
    getCharities().then(setCharitiesByTags);
  }, []);

  const handleClick = (event) => {
    // setShowCharities(charitiesByTags.map((tags) => <CharityCard key={tags.id} charityObj={tags} onUpdate={charitiesByTags} />))
    if (event.target.value === 'education') {
      setShowCharities(charitiesByTags.filter((charity) => charity.charityTags.some((tag) => tag.tag.name === 'Education')).map((tags) => <CharityCard key={tags.id} charityObj={tags} onUpdate={charitiesByTags} />));
    }
    if (event.target.value === 'healthcare') {
      setShowCharities(charitiesByTags.filter((charity) => charity.charityTags.some((tag) => tag.tag.name === 'Healthcare')).map((tags) => <CharityCard key={tags.id} charityObj={tags} onUpdate={charitiesByTags} />));
    }
    if (event.target.value === 'food Safety') {
      setShowCharities(charitiesByTags.filter((charity) => charity.charityTags.some((tag) => tag.tag.name === 'Food Security')).map((tags) => <CharityCard key={tags.id} charityObj={tags} onUpdate={charitiesByTags} />));
    }
    if (event.target.value === 'youth empowerment') {
      setShowCharities(charitiesByTags.filter((charity) => charity.charityTags.some((tag) => tag.tag.name === 'Youth Empowerment')).map((tags) => <CharityCard key={tags.id} charityObj={tags} onUpdate={charitiesByTags} />));
    }
    if (event.target.value === 'environment') {
      setShowCharities(charitiesByTags.filter((charity) => charity.charityTags.some((tag) => tag.tag.name === 'Environment')).map((tags) => <CharityCard key={tags.id} charityObj={tags} onUpdate={charitiesByTags} />));
    }
  };
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center', marginTop: '20px' }}>
        <h2>Click to view charity categories </h2>
      </div>
      <div className="categoryButtons" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <Button id="education" value="education" variant="primary" size="lg" onClick={handleClick} active>
          Education
        </Button>

        <Button value="environment" variant="primary" size="lg" onClick={handleClick} active>
          Environment
        </Button>
        <Button value="food safety" variant="primary" size="lg" onClick={handleClick} active>
          Food Security
        </Button>
        <Button value="healthcare" variant="primary" size="lg" onClick={handleClick} active>
          Healthcare
        </Button>
        <Button value="youth empowerment" variant="primary" onClick={handleClick} size="lg" active>
          Youth Empowerment
        </Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>{showCharities}</div>
    </>
  );
}
