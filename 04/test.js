/*const title = "jeju";

const url =
  "https://daum.net/\
ads" + title;
const url2 = `https://daum.ne/${title}`;
console.log(url);
console.log(url2);

function sum(x, y = 0) {
  return x + y;
}

console.log(sum(10));

const result = [1, 2, 3].map((item) => item + 1);

console.log(result);

const items = [1, 2, 3, 4];
console.log(...items);

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
const [, y] = [...numbers];
console.log(y);

//console.log(sum(...numbers));

function func(...param) {
  console.log(param);
}

func(1, 2, 3);

const obj = { team: 1, area: 2 };

const { team, area1 } = obj;

const number = 1;
const obj1 = {
  number,
};
*/

// 1. 문자열 합치기
const year = 2022;
const month = 11;
const day = 3;

// quiz

const dateString = `${year}-${month}-${day}`;
// 출력: 2022-12-03
console.log(dateString);

// 2. 문자열 분리
// quiz
console.log(dateString.split("-").map((e) => e * 1));
// 출력: [2022,12,12];

/*
// 3. 문자열 변경
const text = "나는 XX를 좋아해";
const item = "JS";
// quiz
console.log(text.replace("XX", item));
// 출력: 나는 JS를 좋아해
*/

// 4. 문자열 검색
const text = "안녕하세요. 나는 사람입니다.";
const searchText = "사람";

// quiz
console.log(text.indexOf(searchText) !== -1);
// 출력: true

// 5. 모든 배열값 더하기
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];

// quiz
// point3이 생길수도 있을때 대응
const arrSum = (...param) => {
  let sum = 0;
  param.forEach((a) => {
    a.forEach((e) => {
      if (!isNaN(e * 1)) sum += e * 1;
    });
  });
  return sum;
};
console.log(arrSum(point1, point2));
// 출력: 373 (모든 배열값들이 합)

// 6. 소수점이하를 버리고 정수 구하기
const a = 1.2;
const b = 3.4;

// quiz
console.log(Math.floor(a + b));
// 출력: 4

// 7. 랜덤수 구하기
const min = 1;
const max = 10;

// quiz
console.log(Math.floor(Math.random(min, max) * 10) + 1);
//출력: 3 (1~10 포함한 랜덤수)

// 8. 배수 확인
const target = 10;
const num = 3;

// quiz
// target이 num이 배수인지
console.log(target % num === 0);
// 출력: false

// 9. 대문자로 변경
const nick = "kakao";

// quiz
console.log(nick.toLocaleUpperCase());
// 출력: KAKAO

/*
// 10. 원시타입 요소만 배열로 만들기
const items = [1, "a", true, ["a"], { n: 1 }];

// quiz
const resultArr = [];
items.forEach((e) => {
  if (typeof e === "number") {
    resultArr.push(e);
  } else if (typeof e === "string") {
    resultArr.push(e);
  } else if (typeof e === "boolean") {
    resultArr.push(e);
  }
});
console.log(resultArr);
// 출력: [1,'a',true]
*/

/*
// 11.배열값 나누기
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

// quiz
// pageSize에 따라 배열값 분리해서 출력
// pageSize=2 일때는 맨끝에 --- 없어야함
let joinArr = items.join(",");
let re = joinArr.split("").map((e, i) => {
  console.log((i + 1) % (pageSize * 2) === 0, i);
  if ((i + 1) % (pageSize * 2) === 0) {
    return "---";
  }
  return e;
});
console.log(re.join(""));

// 출력: a,b,c---d,e,f---g,h,i---j

*/
/*
//12. 배열값 나눠서 다시 배열로
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

const result = [];
let arr = [];
items.forEach((value, index) => {
  if ((index + 1) % 3 === 0) {
    arr.push(value);
    result.push(arr);
    arr = [];
  } else {
    arr.push(value);
  }
});
result.push(arr);
console.log(result);
// quiz
// pageSize에 따라 배열값 분리해서 출력

// 출력: [ [a,b,c], [d,e,f], [g,h,i], [j] ]

*/
//13. 페이지의 시작번호 구하기
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

const getStartIndexByPage = function (page) {
  // quiz
  const startIndexByPage = pageSize * (page - 1);
  console.log(startIndexByPage);
};

// 출력
getStartIndexByPage(1); // 0
getStartIndexByPage(2); // 3
getStartIndexByPage(3); // 6
