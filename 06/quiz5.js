const $boxs = document.querySelectorAll(".box");

let originX = 0;
let originY = 0;
let movingStart = false;

const startMove = (e) => {
  originX = e.clientX;
  originY = e.clickY;
  movingStart = true;
};

const doingMove = (e) => {
  if (!movingStart) {
    return;
  }
  console.log("이동");
  const diffX = originX - e.clientX;
  const diffY = originY - e.clientY;

  originX = e.clientX;
  originY = e.clientY;
  e.target.style.left = e.target.offsetLeft - diffX + "px";
  e.target.style.top = e.target.offsetTop - diffY + "px";
};

const finishMove = () => {
  movingStart = false;
};

const addEventBoxDrag = ($box) => {
  $box.addEventListener("mousedown", startMove);
  $box.addEventListener("mousemove", doingMove);
  $box.addEventListener("mouseup", finishMove);
};

$boxs.forEach(($box) => {
  addEventBoxDrag($box);
});
