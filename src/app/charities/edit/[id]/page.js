'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CharityForm from '../../../../components/CharityForm';
import { getSingleCharity } from '../../../../api/charityAPI';

export default function EditCharity({ params }) {
  const [editItem, setEditItem] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { id } = params;

  const handleUpdate = () => {
    if (id) {
      getSingleCharity(id).then((data) => {
        setEditItem(data); // Refresh the charity data
      });
    }
  };

  useEffect(() => {
    if (id) {
      getSingleCharity(id).then((data) => {
        setEditItem(data);
        // setIsLoading(false);
      });
      // .catch((er) => {
      //   setError('Failed to load author data.');
      //   setIsLoading(false);
      //   console.log(er);
      // });
    }
  }, [id]);

  return <CharityForm obj={editItem} onUpdate={handleUpdate} />;
}

EditCharity.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
