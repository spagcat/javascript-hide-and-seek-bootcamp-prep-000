function getFirstSelector(selector) {
  var firstElement = document.querySelector(selector);
  return firstElement;
}

function nestedTarget() {
  var target = document.getElementById('nested');
  return target;
}

function increaseRankBy(n) {
  var target = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < target.length; i++) {
    target[i].innerHTML = parseInt(target[i].innerHTML) + n;
  }
}

function deepestChild() {
  var search = document.getElementById('grand-node').querySelectorAll('div');
  for(var i = 0; i < search.length - 1; i++) {
    var deepChild = search[i].querySelector('div');
  }
  return deepChild;
}