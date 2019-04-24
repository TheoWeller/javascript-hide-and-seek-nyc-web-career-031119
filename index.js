const app = document.getElementById("app");
// const getFirstSelector = app.querySelector('ul.ranked-list li')

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}
