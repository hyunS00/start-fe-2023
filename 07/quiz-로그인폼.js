const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = form.elements.id.value;
  const pw = form.elements.pw.value;

  if (id === pw) {
    result.innerText = "success";
    result.classList.add("success");
    result.classList.remove("error");
  } else {
    result.innerText = "error";
    result.classList.add("error");
    result.classList.remove("success");
  }
});
