const $box = document.querySelector(".box");
const $bug = document.querySelector("#bug");
const $point = document.querySelector("#point");
const $life = document.querySelector("#life");

const boxXSize = $box.clientWidth;
const boxYSize = $box.clientHeight;
const bugXSize = $bug.clientWidth;
const bugYSize = $bug.clientHeight;

let point = $point.innerText * 1;
let life = $life.innerText * 1;
let bugXPos = $bug.clientWidth;
let bugYPos = $bug.clientHeight;

let isClick = false;

const addPoint = () => {
  $point.innerText = ++point;
};

const decreasLife = () => {
  $life.innerText = --life;
};

const isLifeOver = () => {
  if (life <= 0) {
    clearInterval(startGame);
    setTimeout(() => {
      alert("gameover!  score:" + point);
      location.reload();
    });
  }
};
const moveBug = () => {
  if (!isClick) {
    decreasLife();
  }
  $bug.style.display = "block";
  bugXPos = Math.ceil(Math.random() * boxXSize);
  if (bugXPos > boxXSize - bugXSize) {
    bugXPos = boxXSize - bugXSize;
  }
  bugYPos = Math.ceil(Math.random() * boxYSize);
  if (bugYPos > boxYSize - bugYSize) {
    bugYPos = boxYSize - bugYSize;
  }
  $bug.style.left = bugXPos + "px";
  $bug.style.top = bugYPos + "px";
  isClick = false;
  isLifeOver();
};

const clickBug = (e) => {
  isClick = true;
  addPoint();
  e.target.style.display = "none";
};

$bug.addEventListener("click", clickBug);

let startGame = setInterval(moveBug, 1500);
