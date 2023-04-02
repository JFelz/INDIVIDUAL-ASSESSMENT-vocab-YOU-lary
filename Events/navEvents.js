import { showCards } from '../pages/Cards';
import { favoriteCards, getCards } from '../api/cardData';
import { signOut } from '../utils/auth';

const navEvents = () => {
// SHOW ALL CARDS
  document.querySelector('#allcards').addEventListener('click', () => {
    getCards().then(showCards);
  });

  document.querySelector('#favcards').addEventListener('click', () => {
    favoriteCards().then(showCards);
  });

  document.querySelector('#logoutBtn').addEventListener('click', signOut);
};

export default navEvents;
