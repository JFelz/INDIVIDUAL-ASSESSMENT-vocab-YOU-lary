import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDom('#store', domString);
};

const showCards = (array) => {
  clearDom();

  let cardString = '';
  array.forEach((item) => {
    cardString += `<div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <hr>
            <p class="card-description">${item.description}</p>
            <i class="btn btn-success fas fa-eye" id="view-card-btn--${item.firebaseKey}"></i>
            <i id="edit-card-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-card-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDom('#store', cardString);
};

export { emptyCards, showCards };
