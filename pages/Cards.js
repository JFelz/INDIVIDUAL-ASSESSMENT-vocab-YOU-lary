import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDom('#store', domString);
};

// updateCardForm = () =>

const showCards = (array) => {
  clearDom();

  let cardString = '';
  array.forEach((item) => {
    cardString += `<div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <hr>
            <p class="card-description">${item.description}</p>
            <div id="updateform-location></div>
            <i class="btn btn-success fas fa-eye" id="view-card-btn--${item.firebaseKey}"></i>
            <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDom('#store', cardString);
};

// const hideUpdateForm = document.querySelector('#main.container').addEventListener('click', (e) => {
// if (e.target.id.includes('update-form')) {
// }
// });

export { emptyCards, showCards };
