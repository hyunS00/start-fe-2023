const $loading = document.querySelector(".loading");
$loading;
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    const { title } = json;
    console.log(title);
  });
