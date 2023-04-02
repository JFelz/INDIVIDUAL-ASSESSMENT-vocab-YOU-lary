import { getCards } from '../api/cardData';
import { addCardBtn } from '../components/forms/addCardForm';
import logoutButton from '../components/logoutButton';
import domEvents from '../Events/domEvents';
import formEvents from '../Events/formEvents';
import navEvents from '../Events/navEvents';
import { showCards } from '../pages/Cards';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navbar';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  navEvents();
  logoutButton();
  addCardBtn();
  formEvents();

  getCards().then((cards) => showCards(cards));
};

export default startApp;
