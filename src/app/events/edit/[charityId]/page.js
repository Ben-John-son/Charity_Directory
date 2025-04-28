'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EventForm from '@/components/EventForm';
import { getSingleEvent } from '@/api/eventAPI';

export default function EditEvent({ params }) {
  const [editItem, setEditItem] = useState({});
  const { charityId } = params;

  useEffect(() => {
    getSingleEvent(charityId).then(setEditItem);
  }, [charityId]);

  // pass object to form
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
      <EventForm obj={editItem} />
    </div>
  );
}

EditEvent.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
