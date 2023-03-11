import { createCard, updateCard, getCards } from '../api/cardData';
import { showCards } from '../pages/Cards';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    // Submitting Form to add Card
    if (e.target.id.includes('submit-card')) {
      const submitPayload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        favorite: document.querySelector('#favorite').checked,
      };
      createCard(submitPayload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards().then(showCards);
        });
      });
    }
  });
};

export default formEvents;
