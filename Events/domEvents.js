import { deleteCards, getCards } from '../api/cardData';
import { showCards } from '../pages/Cards';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteCards(firebaseKey).then(() => { getCards().then(showCards); });
    }
  });

  // document.querySelector('#main-container').addEventListener('click', (e) => {
  //   if (e.target.id.includes('edit-card-btn')) {
  //     const [, firebaseKey] = e.target.id.split('--');
  //   }
  // });
};

export default domEvents;
