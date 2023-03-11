import { addCardBtn } from '../components/forms/addCardForm';
import navEvents from '../Events/navEvents';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navbar';

const startApp = () => {
  domBuilder();
  navBar();
  navEvents();
  addCardBtn();
};

export default startApp;
