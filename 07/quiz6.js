const $input = document.querySelector("#num");
const $btn = document.querySelector("#btn");
const $result = document.querySelector("#result");

const multiplication = (start, stop) => {
  let gugudan = "";
  if (start <= 0) start = 1;

  for (i = start; i <= stop; i++) {
    for (j = 1; j < 10; j++) {
      gugudan += `${i} X ${j} = ${i * j}\n`;
    }
  }
  return gugudan;
};

const clickButton = () => {
  if ($input.value === "") {
    alert("숫자를 입력해주세요");
  }
  const veiwGugudan = multiplication($input.value, $input.value);
  $result.innerText = veiwGugudan;
};

$btn.addEventListener("click", clickButton);
