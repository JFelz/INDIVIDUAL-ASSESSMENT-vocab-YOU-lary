import { showCards } from '../pages/Cards';
import getCards from '../api/cardData';

const navEvents = () => {
// SHOW ALL CARDS
  document.querySelector('#allcards').addEventListener('click', () => {
    console.warn('Clicked Show All Cards!');
    getCards().then(showCards);
  });
};

export default navEvents;
