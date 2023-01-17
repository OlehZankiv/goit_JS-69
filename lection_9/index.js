// Модуль 5. Заняття 9. Контекст виклику функції та this
//

// THEORY ====>
// 1. Що таке this? [window, контекст виклику]
// parseFloat, parseInt, Math ........

// Number.parseFloat() // window.Number.parseFloat()
// parseFloat() // window.parseFloat()

// const a = {
//   x: 100,
//   f: foo,
// };

// a.f();

// const user = {
//   x: 10,
//   voice() {
//     console.log(this.x / 100);
//   },
// };

// const f2 = user.voice;

// f2();

// --------------

// const user = {
//   voice() {
//     console.log(this);

//     function foo() {
//       console.log(this);
//     }

//     foo();
//   },
// };

// const call = user.voice;

// call();

// 2. Стрілочні функції і this;

// const voice = () => {
//   console.log(this);
// };

// voice();

// const u = {
//   f: voice,
// };

// u.f();

// const user = {
//   sayThis() {
//     const hello = () => {
//       console.log(this);
//     };

//     hello();
//   },
// };

// user.sayThis();

// const a  = user.sayThis

// 3. Як з this працює "use strict"? [window, стрілочні функції]
// "use strict";

// 4. bind, call i apply.

// const user = {
//   name: "Oleh",

//   sayName(x, y) {
//     console.log("I'm " + this.name + x + y);
//   },
// };

// const makeSomething = (callback) => {
//   const x = 100;
//   const y = 100 - x;
//
//

//   callback.apply(user, ["HELLO", "WORLD"]);
// };

// const newF = user.sayName.bind(user);

// makeSomething(user.sayName);

// const user = {
//   name: "Oleh",

//   sayName: () => {
//     console.log("I'm " + this.name);
//   },
// };

// user.sayName.bind(user)

// user.sayName.apply(user);

// <==== THEORY

// =>
// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName),
// який приймає назву каменю і розраховує та повертає загальну вартість каменів
// з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find((stone) => stone.name === stoneName);

//     if (!stone) return 0;

//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// =>
// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// console.log(phonebook.contacts);

// =>
// Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   a: 1,
//   b: 1,

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(10, 20);
// console.log(calculator.add());
// console.log(calculator.mult());

// *
// Звязати об'єкт room та функцію visitHome так щоб при виходу з кімнати спрацьовувала
// функція closeWindow, а при вході openWindow.

// const room = {
//   isCold: false,
//   openWindow() {
//     //
//     this.isCold = true;
//   },
//   closeWindow() {
//     //
//     this.isCold = false;
//   },
// };

// const visitHome = (onVisit, onOut, isVisit = true) => {
//   if (isVisit) onVisit();
//   else onOut();
// };

// visitHome(room.openWindow.bind(room), room.closeWindow.bind(room));

// console.log(room);

// visitHome(room.openWindow.bind(room), room.closeWindow.bind(room), false);

// console.log(room);
