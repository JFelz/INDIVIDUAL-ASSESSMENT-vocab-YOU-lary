import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
      <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
        <div class="inputTitle">
          <label for="title">Card Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${obj.title || ''}" required>
        </div>
        <div class="inputDescription">
          <label for="description">Description</label>
          <textarea class="form-control" placeholder="Book Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
        </div>
        <div class="form-group" id="select-author">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
          <label class="form-check-label" for="favorite" id="favorite">Favorite?</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit Card
        </button>
      </form>`;
  renderToDom('#form-container', domString);
//   selectAuthor(`${obj.author_id || ''}`);
};

// Form Button

const addCardBtn = () => {
  document.querySelector('#add-cards').addEventListener('click', () => {
    clearDom();
    addCardForm();
  });
};

export {
  addCardForm,
  addCardBtn
};
