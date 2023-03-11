const renderToDom = (divId, renderedContent) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = renderedContent;
};

export default renderToDom;
