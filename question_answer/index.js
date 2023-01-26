//
// Заняття №11: Питання-Відповідь
// ______________________________
//

// const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

// console.log("Hello, how Are you".replace(/[a-m]/gi, ""));

// const array = ["wdw", "11", "10.10", "awd10", "10px"];

// console.log(array.map(Number));
// console.log(array.map(Boolean));

// spread -> розбиває <...>
// rest -> збирає в одне <...>

// const obj1 = {
//   name: "Petro",
// };
// const obj2 = {
//   ...obj1,
//   surname: "Ivaniv",
// };

// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4, ...arr1];

// const func1 = ({ name, ...rest }) => {
//   console.log(name, rest);
// };

// func1({
//   name: "Ivan",
//   age: 22,
//   surname: "Ivaniv",
// });

// Що таке замикання?
// Це функція, яка повертає функцію -> BAD
// Це фуккція, здатність
// якої зберігати та памʼятати свій стан за допомогою функції, яка повертається -> GOOD

// function closure() {
//   let x = 100;
//   x += 50;

//   console.log(x);

//   return function () {
//     x += 10;
//     console.log(x);
//   };
// }

// const newFunc = closure();

// newFunc();
// newFunc();
// newFunc();
// newFunc();
// newFunc();

// const createLiker = () => {
//   let likesCount = 0;

//   return () => (likesCount += 1);
// };

// const liker = {
//   likes: 0,

//   addLike() {
//     this.like += 1;
//   },
// };

// liker.addLike()

// const liker = createLiker();

// const array = ["Hello", "World"];
// const user = {
//   name: "Oleh",
//   age: 22,
// };

// for (const item of user) {
//   console.log(item);
// }

// for (const item in user) {
//   console.log(item);
// }

// for (const item in user) {
//   console.log(item);
// }

// console.log(user);

// function hello() {
//   console.log(Array.from(arguments));
// }

// hello("HELLO", "WORLD");

// const number = [3, 6, 2, 1];

// console.log(number.reduce((previous, current) => previous + current, 0)); // 12

// const number = [3, 6, 2, 1]; // {_0: 3, _1: 6, _2: 2, _3: 1}

// let obj = {};

// for (let i = 0; i < number.length; i++) {
//   obj["_" + i] = number[i];
// }

// console.log(obj);

// console.log(
//   number.reduce((previous, current, i) => {
//     previous["_" + i] = current;
//     return previous;
//   }, {})
// );

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(add(1)(2)(3));

// const createClickHandler = (name) => () => console.log(`${name} clicked here`);

// const user = {
//   clickHandler: createClickHandler("OLEH"),
//   clickOnButton() {
//     console.log("CLICK");
//     this.clickHandler();
//   },
// };

// user.clickOnButton();

// class User {
//   name;
//   age;

//   constructor(name, age) {
//     this.name = name || "Without a name";
//     this.age = age ?? 18;
//   }

//   sayName() {
//     console.log("Hello. I'm " + this.name);
//   }
// }

// const admin = new User("", 0);

// console.log(admin);

// const user = {
//   name: "Oleh",
//   sayName: () => {
//     console.log(this.name);
//   },
// };

// user.sayName();

// function A() {}
// const B = () => {};

// console.log(A.prototype);
// console.log(B.prototype);

// []
//    []
//       []
//          []
//          []
//          []
//       []
//       []
//    []
//    []
// []
// []
// []
// []

// const sayHi = (n) => {
//   if (n === 0) return;
//   console.log("HI");

//   sayHi(n - 1);
// };

// sayHi(5);

// console.log(new Array(100).fill("0"));

// const set = new Set([1, 2, 4, 4, 4, 4, 4, 44, 2, 3, 3, 4]);

// set.forEach((v) => {
//   console.log(v);
// });

// function h() {
//   console.log("woduhwoidhu");
// }

// function b(callback) {
//   callback();
// }

// b(h);

// class User {
//   name = "wdwd";

//   sayHello() {
//     console.log("Hello" + this.name);
//   }
// }

// function Admin() {}
// Admin.prototype.sayHello = function () {
//   console.log("HELLO");
// };

// const user = new User();
// user.sayHello();
// console.log(user.sayHello());

// Array.prototype.sayHello = function () {
//   console.log("HELLO");
// };

// const array = [];

// console.log(User.prototype.sayHello());
// console.log(Admin.prototype.sayHello());

// const user = {
//   name: "Oleh",
//   sayName() {
//     console.log(this.name);
//   },
// };

// const admin = {
//   name: "Ivan",
//   sayName: user.sayName,
// };

// admin.sayName();

// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Задача на рекурсію

// const people = [
//   { name: "Ivan", id: "1", parentId: null },
//   { name: "Anna", id: "2", parentId: "1" },
//   { name: "Petro", id: "3", parentId: "1" },
//   { name: "Maria", id: "4", parentId: null },
//   { name: "Sergiy", id: "5", parentId: "4" },
//   { name: "Yura", id: "6", parentId: "2" },
//   { name: "Anastasiya", id: "7", parentId: "2" },
// ]; // response

// // result
// const result = [
//   {
//     name: "Ivan",
//     id: "1",
//     parentId: null,
//     children: [
//       {
//         name: "Anna",
//         id: "2",
//         parentId: "1",
//         children: [
//           { name: "Yura", id: "6", parentId: "2", children: null },
//           { name: "Anastasiya", id: "7", parentId: "2", children: null },
//         ],
//       },
//       { name: "Petro", id: "3", parentId: "1", children: null },
//     ],
//   },
//   {
//     name: "Maria",
//     id: "4",
//     parentId: null,
//     children: [{ name: "Sergiy", id: "5", parentId: "4", children: null }],
//   },
// ];
