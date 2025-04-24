'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CharityForm from '../../../../components/CharityForm';
import { getSingleCharity } from '../../../../api/charityAPI';

export default function EditCharity({ params }) {
  const [editItem, setEditItem] = useState({});

  const { id } = params;

  useEffect(() => {
    getSingleCharity(id).then(setEditItem);
  }, [id]);

  return <CharityForm obj={editItem} />;
}

EditCharity.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
