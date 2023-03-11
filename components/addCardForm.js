import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addCardForm = () => {
  clearDom();
  const browserString = `
    <div class="mb-3">
    <label for="exampleFormControlInput1" class=".form-control-plaintext ">Title</label>
    <input type="title" class=".form-control-plaintext" id="exampleFormControlInput1" placeholder="Title">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class=".form-control-plaintext">Description</label>
    <textarea class=".form-control-plaintext " id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>`;

  renderToDom('#form-container', browserString);
};
export default addCardForm;
