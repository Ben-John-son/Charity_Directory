import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET ALL EVENTS
const getEvents = (charityId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/events/charity/${charityId}`, {
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

// CREATE EVENT
const createEvent = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/events`, {
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

// GET SINGLE EVENT
const getSingleEvent = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/events/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// DELETE EVENT
const deleteEvent = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/events/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// UPDATE EVENT
const updateEvents = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/authors/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

//  GET A SINGLE Charity by its event
const getEventsCharity = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/charities/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

export { getEvents, createEvent, getSingleEvent, deleteEvent, updateEvents, getEventsCharity };
