const app = document.getElementById("app");
// const getFirstSelector = app.querySelector('ul.ranked-list li')

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(num) {
   let list = document.querySelector('.ranked-list');
   list = list.children
   for (let item of list) {item.innerText + num }
   return list;

}
