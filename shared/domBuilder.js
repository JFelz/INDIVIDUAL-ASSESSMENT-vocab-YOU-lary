import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div style="padding-top: 20px; padding-bottom: 20px" id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
