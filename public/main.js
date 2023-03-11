// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <div style="color: white">
  <h1><b>RECALL</b></h1>
  <h5>The Anatomy Memorization App.</h5>
  <br />
  <button type="button" class="btn btn-primary" id="signIn_Btn">Sign In</button>
  </div>`;

  document
    .querySelector('#signIn_Btn')
    .addEventListener('click', () => ViewDirectorBasedOnUserAuthStatus());

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
