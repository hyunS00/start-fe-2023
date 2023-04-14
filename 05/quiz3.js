const $input = document.querySelector(".txt");
const $textBtn = document.querySelector(".text-btn");
const $addRed = document.querySelector(".add-red");
const $addBtn = document.querySelector(".add-btn");
const $deleteBtn = document.querySelector(".delete-btn");
const $resetBtn = document.querySelector(".reset-btn");
const $toggleBtn = document.querySelector(".toggle-btn");
const $imageBtn = document.querySelector(".image-btn");
const $box = document.querySelector(".box");
const $boxs = [$box];

const addRed = () => {
  $box.classList.add("red");
  $boxs.forEach((box) => {
    box.classList.add("red");
  });
};
$addRed.addEventListener("click", addRed);

const addBox = () => {
  let newNode = $box.cloneNode(true);
  document.body.append(newNode);
  $boxs.push(newNode);
};
$addBtn.addEventListener("click", addBox);

const deleteBox = () => {
  let $removeBox = $boxs.pop();
  $removeBox.remove();
};
$deleteBtn.addEventListener("click", deleteBox);

const addText = () => {
  $box.innerText = $input.value;
  $boxs.forEach((box) => {
    box.innerText = $input.value;
  });
};
$textBtn.addEventListener("click", addText);

const resetBox = () => {
  $box.innerHTML = "<div class = 'box'><div>";
  $boxs.forEach((box) => {
    box.remove();
  });
};
$resetBtn.addEventListener("click", resetBox);

let isToggleClick = false;
const toggleBox = () => {
  isToggleClick = !isToggleClick;
  if (isToggleClick) {
    $box.style.display = "none";
    $boxs.forEach((box) => {
      box.style.display = "none";
    });
  } else {
    $box.style.display = "block";
    $boxs.forEach((box) => {
      box.style.display = "block";
    });
  }
};
$toggleBtn.addEventListener("click", toggleBox);

const addImage = () => {
  fetch("https://i.imgur.com/69NjYBH.png")
    .then((response) => response.blob())
    .then((blob) => {
      const objectURL = URL.createObjectURL(blob);
      $box.style.backgroundImage = `url(${objectURL})`;
      $boxs.forEach((box) => {
        box.style.backgroundImage = `url(${objectURL})`;
      });
    });
};
$imageBtn.addEventListener("click", addImage);
