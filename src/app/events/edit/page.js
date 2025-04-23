'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EventForm from '@/components/EventForm';
import { getSingleEvent } from '../../../api/eventAPI';

export default function EditEvent({ params }) {
  const [editItem, setEditItem] = useState({});
  const { charityId } = params;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleEvent(charityId).then(setEditItem);
  }, [charityId]);

  // TODO: pass object to form
  return <EventForm obj={editItem} />;
}

EditEvent.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
