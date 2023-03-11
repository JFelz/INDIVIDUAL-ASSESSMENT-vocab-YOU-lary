import { showCards } from '../pages/Cards';
import { favoriteCards, getCards } from '../api/cardData';

const navEvents = () => {
// SHOW ALL CARDS
  document.querySelector('#allcards').addEventListener('click', () => {
    getCards().then(showCards);
  });

  document.querySelector('#favcards').addEventListener('click', () => {
    favoriteCards().then(showCards);
  });
};

export default navEvents;
