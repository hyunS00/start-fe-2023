const apiUrl = "https://dapi.kakao.com/v2/search/web";

const kakaoAPIKey = "fe49fff5b3cab8c6388039fead86c99b";

const options = {
  headers: {
    Authorization: `KakaoAK ${kakaoAPIKey}`,
  },
};

const $searchForm = document.querySelector("#searchForm");
const $searchInput = document.querySelector(".input");
let searchData = [];
let displayData = [];
let dataPage = 0;

$searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if ($searchInput.value) {
    const query = $searchInput.value;
    const url = `${apiUrl}?query=${query}`;
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        searchData = data.documents;
        displayData = searchData.splice(0, 3);
        displaySearch(displayData);
        checkMoreData();
      });
  }
});

const $isMultiline = document.querySelector(".is-multiline");

const displaySearch = (data) => {
  data.forEach((data) => {
    let div = document.createElement("div");
    div.className = "column is-one-third";
    div.innerHTML = `
                <div class="card">
                    <div class="card-content">
                    <p class="title">${data.title}</p>
                    <p class="subtitle">${data.datetime}</p>
                    <div class="content">${data.contents}</div>
                </div>
                `;
    $isMultiline.appendChild(div);
  });
};

const $moreBtn = document.querySelector("#moreBtn");

const moreSearch = () => {
  displayData = searchData.splice(0, 3);
  displaySearch(displayData);
  checkMoreData();
};

$moreBtn.addEventListener("click", moreSearch);
$moreBtn.style.display = "none";
const checkMoreData = () => {
  if (searchData.length > 0) {
    $moreBtn.style.display = "block";
  } else {
    $moreBtn.style.display = "none";
  }
};
