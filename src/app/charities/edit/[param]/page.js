'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CharityForm from '../../../../components/CharityForm';
import { getSingleCharity } from '../../../../api/charityAPI';

export default function EditCharity({ params }) {
  const [editItem, setEditItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { param } = params;

  useEffect(() => {
    if (param) {
      getSingleCharity(param)
        .then((data) => {
          setEditItem(data);
          setIsLoading(false);
        })
        .catch((er) => {
          setError('Failed to load author data.');
          setIsLoading(false);
          console.log(er);
        });
    }
  }, [param]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <CharityForm obj={editItem} />;
}

EditCharity.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
