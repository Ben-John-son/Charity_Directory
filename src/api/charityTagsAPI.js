/* eslint-disable padded-blocks */
import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTags = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/tags`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data ? Object.values(data) : []); // Ensure the response is always an array
      })
      .catch(reject);
  });

const createCharityTag = (tag) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/charityTags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tag),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => {
        console.error('Error in createCharityTag:', error);
        reject(error);
      });
  });

const deleteTags = (charityId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/charityTags/charity/${charityId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            console.error('Error deleting tags:', text);
            reject(new Error(`Error: ${response.status} ${response.statusText}`));
          });
        }
        return response.status === 204 ? null : response.json().parse(); // Handle empty responses
      })
      .then((data) => resolve(data || {})) // Resolve with an empty object if no data
      .catch((error) => {
        console.error('Error in deleteTags:', error);
        reject(error);
      });
  });

const updateTags = (payload) =>
  new Promise((resolve, reject) => {
    console.log('Payload being sent to updateTags:', JSON.stringify(payload, null, 2)); // Debugging
    fetch(`${endpoint}/api/charityTags`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            console.error('Error updating tags:', text);
            reject(new Error(`Error: ${response.status} ${response.statusText}`));
          });
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error('Error in updateTags:', error);
        reject(error);
      });
  });

export { getTags, updateTags, deleteTags, createCharityTag };
