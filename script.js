var cluster = "";
var time = 60;
var target = Math.floor(Math.random() * 10);
var score;

function createBubbles() {
  for (var i = 1; i <= 70; i++) {
    var randomNum = Math.floor(Math.random() * 10);
    cluster += `<div class="full-bubbles">${randomNum}</div> `;
    document.querySelector(".full-bubbles").innerHTML = cluster;
  }
}
createBubbles();

function runTime() {
  setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector(".time").textContent = time;
    }
  }, 100);
}
runTime();

function setTarget() {
  document.querySelector(".target").textContent = target;
}
setTarget();

function setScore() {
  document.querySelector(".full-bubbles").textContent = events;
}
