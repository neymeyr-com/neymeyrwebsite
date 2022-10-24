var points = 0;
var increment = 1;
var shopCount = 10;

const counterEle = document.querySelector('#counter');
const shopCounterEle = document.querySelector('#shopCount');

function klickMich() {
    points += increment;
    counterEle.innerHTML = points;
}

function shop() {
    alert('Hallo!')

}

window.onbeforeunload = function() {
  return "";
}
