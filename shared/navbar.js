import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id=navBar">RECALL</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" id="add-cards">Add Cards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="allcards">My Cards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="favcards">Favorite Cards</a>
        </li>
        <div style="justify-content:end;>
          <li class="nav-item">
            <a class="nav-link" href="#" id="logoutBtn">Logout</a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</nav>`;

  renderToDom('#navigationBar', domString);
};

export default navBar;
