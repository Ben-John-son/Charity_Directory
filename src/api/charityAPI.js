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
    fetch(`${endpoint}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// const createCharity = () => new Promise((resolve, reject) => {
//   fetch(`${endpoint}`)
// }

export { getCharities, getSingleCharity };
