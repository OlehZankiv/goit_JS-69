// Модуль 3 Заняття 6. Деструктуризація та rest/spread

// function name(...params) {
//   console.log(params);
// }

// name(1, 2, 3, 4, 5, 6);

// function name2(name, surname, age) {
//   console.log(name, surname, age);
// }

// const arr = ["name", "sur", 28];

// name2(...arr);

// console.log(Math.max(...[1, 2, 3, 4, 5, 6]));

// const car = {
//   name: "Doblo",
//   model: "Tesla",
//   speed: 300,
// };

// function showInfo({ name, surname, ...props }) {
//   console.log(`User name is ${name}, age is ${surname}.`);
//   console.log(props);
//   props.name = "OLEH";

//   props.speed = 1000;
// }

// showInfo({
//   age: 22,
//   location: "Lviv",
//   surname: "Zankiv",
//   name: "Oleh",
//   ...car,
// });

// const user = {
//   email: "@gmail.com",
//   book: {
//     id: "WDw",
//     name: "Harry Potter",
//   },
// };

// const {
//   book: { id, name },
//   email,
// } = user;

// function show({ email: userEmail = "no have email"  }) {
//   const email = "@.com";
//   console.log(email, userEmail);
// }

// function foo({ username }) {
//   console.log(username);
// }

// foo();

// show(user);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [...arr1];

// console.log(arr1 === arr2);

// function showInfo({ name, surname, age, book, id }) {
//
// }

// showInfo({
//   name: "Oleh",
//   surname: "Zankiv",
//   age: 18,
//   book: { id: "W" },
//   id: "HEDPAODW",
// });

// const [first, second, third, fourth] = [1, 2, 3, 4];

// const car = {
//   a: "wd",
//   b: "wddw",
// };

// [['a', 'wd'], ['b', 'wdww']]

// for (const [key, value] of Object.entries(car)) {
//   console.log(key, value);
// }

// =>
// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Було
// console.log(calcBMI("88,3", "1.75"));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

// =>
// Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Очікується
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// =>
// Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({ companyName, bots: { repair, defence } }) {
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// // Було
// console.log(getBotReport("Cyberdyne Systems", 150, 50));

// // Очікується
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

// =>
// Example 4 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями:
// companyName та stock.
// Функція виводить репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock }) {
//   let total = 0;

//   for (const value of Object.values(stock)) {
//     total += value;
//   }

//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

// =>
// Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так,
// щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt,
// а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

// function createContact(partialContact) {
//   return {
//     list: "default",
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   }) // {name: 'M', email: 'm', list: 'f', id: 'wdwd', createdAt: 1231233213 }
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// =>
// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так,
// щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: firstName + " " + lastName,
//     ...otherProps,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// let name = "Ivan";

// const user = {
//   nickname: name,
// };

// name = "wdwidwd";
// user.nickname = "HELLO";

// console.log(user);
// console.log(name);

// const {age, name} = {
//     name:"Oleh",
//     age: 28
// }

// const [r, g, b] = ["red", "green", "blue"];

// console.log(r, g, b);

// const book = {
//   author: "Bernard Cornwell",
//   year: 1982,
// };

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'
