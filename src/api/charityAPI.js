// getCharities
// createCharity
// updateCharity
// getSingleCharity
// deleteCharity
import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getCharities = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/charities`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const getSingleCharity = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/charities/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const myCharities = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/charities/uid/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(data);
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const deleteCharity = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/charities/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateCharity = async (payload) => {
  try {
    const response = await fetch(`${endpoint}/api/charities/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Charity updated successfully:', data);
      return data;
    }
    const errorData = await response.json();
    console.error('Failed to update charity:', errorData);
    throw new Error('Failed to update charity');
  } catch (error) {
    console.error('Error updating charity:', error);
    throw error;
  }
};

const createCharity = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/charities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const searchCharity = (query) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/charities/search?query=${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getCharities, getSingleCharity, myCharities, deleteCharity, updateCharity, createCharity, searchCharity };
