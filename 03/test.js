// // const a = "a";
// // console.log(a);
// // a = "1";
// // console.log(a);

// //array create
// const todos = ["운동"];
// const todo = "공부";
// todos.push(todo);
// console.log(todos);

// //read
// todos.forEach((todo) => {
//   console.log(todo);
// });

// //update
// const updateTodo = "공부";
// // const updateIndex = todos.findIndex((todo) => {
// //   return todo === updateTodo;
// // });
// // todos[updateIndex] = "게임";
// // console.log(todos);

// var newTodos = todos.map(function (todo) {
//   if (todo === updateTodo) {
//     return "게임";
//   }
//   return todo;
// });
// console.log(newTodos);

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// function test() {
//   console.log("test()");
// }
// var id = setInterval(test, 1000); //1초마다 계속 실행

// console.log(id);
// clearInterval(id);

// var nick = "aji"; //전역변수

// function test() {
//   var age = 30; //지역변수
//   console.log(nick, age);
// }

// test();
// console.log(age);

// var name = "global";
// function test() {
//   console.log(name);
//   var name = "local";
//   console.log(name);
// }
// test();

// //함수또한
// test2();
// function test2() {
//   console.log("test");
// }

//q1
//var count = [10,20,30,40,50,60,70,100];  배열 count 요소들의 평균값 구하는 코드를 작성하세요
// var count = [10, 20, 30, 40, 50, 60, 70, 100];
// var sum = 0;
// var average = 0;
// count.forEach((value) => {
//   sum += value;
// });
// average = sum / count.length;
// console.log(average);

//q2
//구구단을 출력하는 코드를 for구문을 사용하여 작성하세요
// for (i = 1; i < 10; i++) {
//   for (j = 1; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//q3
//위에서 만든 구구단코드를 함수로 작성하세요
// function multiplication(start, stop) {
//   if (start <= 0) start = 1;

//   for (i = start; i <= stop; i++) {
//     for (j = 1; j < 10; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
// }
// multiplication(1, 9);

//q4
//메소드가 포함된 객체를 생성하세요
/*
const gugudanPerson = {
  personName: "hyunsoo",
  age: 25,
  changeName(name) {
    this.personName = name;
  },
  glowOld() {
    ++this.age;
  },
  speakGugudan(start, stop) {
    if (start <= 0) start = 1;

    for (i = start; i <= stop; i++) {
      for (j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
      }
    }
  },
};
*/

let value = "";
let sum = 0;
while (value !== null) {
  value = window.prompt();
  if (!isNaN(value * 1)) {
    sum += value * 1;
  }
}
window.confirm(`숫자의 합은 ${sum}입니다.`);
