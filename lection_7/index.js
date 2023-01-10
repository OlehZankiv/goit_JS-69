// =>
//

// const arr = [{ age: 17 }, { age: 22 }, { age: 26 }, { age: 7 }];

// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].age < 18) {
//     newArr.push(arr[i]);
//   }
// }

// const newArr2 = arr.filter((user) => user.age < 18);

// console.log(newArr);

//

// function voice(onSuccess, onError) {
//   const good = false;

//   good ? onSuccess() : onError();
// }

// function success() {
//   console.log("Good Job!");
// }

// function error() {
//   console.log("Something wrong!");
// }

// voice(success, error);

// const arr = [1, 2, 3, 4, 5];

// arr.forEach((value, index) => console.log(value, index));

// function foo() {}

// const fn = () => "Hello";

// console.log(fn());

// function foo(callback) {
//   callback(20, 40, 100);
// }

// foo((x, y, z) => console.log(x, y, z));
//
//

// function foo() {}

// function hello(callback) {
//   callback();
// }

// hello(foo);

// const foo1 = () => {
//     return () => {

//     }
// }

// const res = foo1()
// res()

// const foo = (x) => x + 10;

// const showResult = (f) => {
//   const res = f();

//   console.log(res);
// };

// showResult(foo);

// function voice(foo) {
//   const res = foo(); // function () {}
//   console.log(res);
//   //   console.log("Hello " + name);
// }

// const hello = function () {
//   console.log("Hello Oleh");

//   return "III";
// };

// hello();

// voice(hello);

// const foo = () => 100;

// console.log(foo());

// const getObj = () => ({ name: "WDw" });

// console.log(getObj());

// Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach

// =>
// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(partialProduct, callback) - приймає об'єкт товару без id, а також коллбек.
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id
// та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту
// і логіює загальну вартість товару в консоль

// function createProduct(partialProduct, callback) {
//   const product = {
//     ...partialProduct,
//     id: Date.now(),
//   };

//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// =>
// Example 2 - Коллбек функції
// Додайте в об'єкт account методи withdraw(amount, onSuccess, onError)
// та deposit(amount, onSuccess, onError),
// де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError,
// якщо amount більше TRANSACTION_LIMIT або this.balance,
// і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT
// або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) onError("Limit is exhausted");
//     else if (amount > this.balance) onError("Your amount is more then balance");
//     else onSuccess("Everything OK!");
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) onError("Limit is exhausted");
//     else if (amount <= 0) onError("Your amount is not enough");
//     else onSuccess("Everything OK!");
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError); // error
// account.withdraw(600, handleSuccess, handleError); // error
// account.withdraw(300, handleSuccess, handleError); // success
// account.deposit(1700, handleSuccess, handleError); // error
// account.deposit(0, handleSuccess, handleError); // error
// account.deposit(-600, handleSuccess, handleError); // error
// account.deposit(600, handleSuccess, handleError); // success

// =>
// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback),
// яка першим параметром очікує масив,
// а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив,
// елементами якого будуть результати виклику коллбека.

// function each(array, callback) {
//   const res = [];

//   for (const value of array) {
//     const newValue = callback(value);

//     res.push(newValue);
//   }

//   return res;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// =>
// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// createProduct({ name: "🍎", price: 30, quantity: 3 }, (product) =>
//   console.log(product)
// );
// createProduct({ name: "🍋", price: 20, quantity: 5 }, (product) =>
//   console.log(product.price * product.quantity)
// );

// =>
// Example 5 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(each([64, 49, 36, 25, 16], Math.sqrt));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], Math.ceil));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], Math.floor));

// =>
// Example 6 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const logItems = (items) =>
//   items.forEach((value, i) => {
//     console.log(`${i + 1} - ${value}`);
//   });

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// =>
// Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");

//   nameList.forEach((value, i) => {
//     console.log(`${value}: ${phoneList[i]}`);
//   });
// };

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// =>
// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const calсulateAverage = (...args) => {
//   let total = 0;

//   args.forEach((value) => (total += value));

//   return total / args.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// const result = [1, 2, 3, 4];
// result.forEach((element) => (element *= 2));

// console.log(result);

// const customForEach = (array, callback) => {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// };

// customForEach(["Hello", "World", "!"], (value, i) => console.log(value, i));

// const arr = ["Hello", "World", "!"].forEach;

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// customForEach(arr, console.log);
