import client from '../utils/client';

const endpoint = client.databaseURL;

const getCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/created.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// Delete Cards

const deleteCards = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/created/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Add Card

const createCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/created.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const updateCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/created/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// Filter Card on Favorite
const favoriteCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/created.json?orderBy="favorite"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getCards,
  deleteCards,
  createCard,
  updateCard,
  favoriteCards
};
