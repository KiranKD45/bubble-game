var cluster = "";
var time = 60;
var target;
var score = 0;

function createBubbles() {
  for (var i = 1; i <= 147; i++) {
    var randomNum = Math.floor(Math.random() * 10);
    cluster += `<div class="full-bubbles">${randomNum}</div> `;
    document.querySelector(".bubbles").innerHTML = cluster;
  }
}

function runTime() {
  var timeinterval = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector(".time").textContent = time;
    } else {
      clearInterval(timeinterval);
      document.querySelector(
        ".bubbles"
      ).innerHTML = `<h1>Game Over and Your Score is ${score} </h1>`;
    }
  }, 1000);
}

function setTarget() {
  target = Math.floor(Math.random() * 10);
  document.querySelector(".target").textContent = target;
}
function increaseScore() {
  score += 10;
  document.querySelector(".score").innerHTML = score;
}
document.querySelector(".bubbles").addEventListener("click", (e) => {
  var clickedNum = Number(e.target.textContent);
  if (clickedNum === target) {
    increaseScore();
    setTarget();
    cluster = "";
    createBubbles();
  }
});

createBubbles();
runTime();
setTarget();
