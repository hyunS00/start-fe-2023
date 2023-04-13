const id = "hello";
const pw = "world";

const $form = document.querySelector("#form");

const checkIdPw = (e) => {
  console.log(e);
};

$form.addEventListener("onSubmit", checkIdPw);
