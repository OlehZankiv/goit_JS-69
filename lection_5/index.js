// Модуль 3. Заняття 1. Об'єкти

// const patient = {
//   name: "Oleh",
//   age: 18,
//   cardId: "12323-123213-123213-123232",
//   sick: {
//     name: "covid",
//     year: 2021,
//     vaccine: true,
//   },
//   getInfo() {
//     console.log(this);
//   },
// };

// const cars = [
//   { model: "BMW", maxSpeed: 1000 },
//   { model: "BMW", maxSpeed: 2000 },
//   { model: "BMW", maxSpeed: 3000 },
// ];

// const res = [
//     ['name', 'Oleh'],
//     ['age', 18],
// ]

// const func = patient.getInfo;
// patient.getInfo();

// console.log(patient.hasOwnProperty("age"));
// console.log(Object.hasOwnProperty.call(patient, "age"));

// for (const key in patient) {
//   if (typeof patient[key] !== "function") {
//     console.log(key);
//   }

// if (Object.hasOwnProperty(patient, key)) {
//   console.log(patient[key]);
//   }
// }

// console.log(Object.entries(patient));

// const parent = {
//   name: "Ivan",
// };

// const child = Object.create(parent);
// child.age = 22;

// console.log(child.n);

// for (const k in child) {
//   console.log(k);
// }

// const products = [
//   { name: "Radar", price: 1300 },
//   { name: "Scanner", price: 2700 },
// ];

// let newObj = products[0];
// newObj = "wdwdwd";

// for (let product of products) {
//   product = "new-name";
// }

// console.log(products);

// const obj = { a: 10 };

// const newObj = Object.assign({}, obj, { hello: "WDwdwd" });
// newObj.a = 20;
// console.log(newObj);
// console.log(obj);

// const ua = {
//   "Hello how are you": "Привіт як ти",
// };
// const en = {
//   "Hello how are you": "Hello how are you",
// };

// console.log(ua["Hello how are you"]);

// function findMatches(array, ...newArray) {
//   const matches = []; // Don't change this line

//   for (const elem of newArray) {
//     // if (array.includes(elem)) {
//     //   matches.push(elem);
//     // }

//     console.log(elem, array);
//     console.log(elem in array);

//     if (elem in array) {
//       matches.push(elem);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// const res = findMatches([1, 2, 33, 4, 5], 1, 3, 2, 4);

// console.log(res);

// =>
// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// =>
// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// for (const salary of Object.values(salaries)) {
//   sum += salary;
// }

// console.log(sum);

// =>
// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName),
// яка приймає масив об'єктів та рядок з назвою каменю.
// Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Діамант", price: 2000, quantity: 2 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//   const res = {
//     name: stoneName,
//     prices: [],
//     quantity: 0,
//     totalPrice: 0,
//   };

//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       res.prices.push(stone.price);
//       res.quantity += stone.quantity;
//       res.totalPrice = stone.quantity * stone.price;
//     }
//   }

//   return res;
// };

// const res = calcTotalPrice(stones, "Діамант"); // { price: 2700, quantity: 3, totalPrice: 8100 }

// console.log(res);

// =>
// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {},

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {},

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {},
// };

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   balance: 0,

//   transactions: [],

//   createTransaction(amount, type) {
//     const newTransaction = {
//       id: this.transactions.length + 1,
//       type,
//       amount,
//     };

//     this.transactions.push(newTransaction);

//     return newTransaction;
//   },

//   deposit(amount) {
//     this.createTransaction(amount, Transaction.DEPOSIT);

//     this.balance += amount;
//   },

//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.error("Your balance is not enough");
//       return;
//     }

//     this.createTransaction(amount, Transaction.WITHDRAW);

//     this.balance -= amount;
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }

//     console.warn("You do not have this transaction: " + id);

//     return null;
//   },

//   getTransactionCount(type) {
//     let count = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         count += 1;
//       }
//     }

//     return count;
//   },

//   getTransactionTotal(type) {
//     let totalAmount = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         totalAmount += transaction.amount;
//       }
//     }

//     return totalAmount;
//   },
// };

// account.deposit(1000);
// account.deposit(2000);
// account.deposit(500);

// console.log(account.getBalance());

// account.withdraw(1000);
// account.withdraw(50);
// account.withdraw(5000);

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionDetails(10));

// console.log(account.getTransactionCount(Transaction.DEPOSIT));
// console.log(account.getTransactionCount(Transaction.WITHDRAW));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// console.log(account.transactions);

// const types = {
//   get: "get money",
//   set: "set money",
// };

// const account = {
//   balance: 0,

//   addMoney(amount) {
//     this.balance += amount;
//   },

//   getMoney(amount) {
//     if (this.balance < amount) return;

//     this.balance -= amount;

//     return amount;
//   },
// };

// account.addMoney(1000);
// account.addMoney(2000);
// account.addMoney(200);

// const user = {
//   age: 20,
//   balance: 100000,
//   getMoney: account.getMoney,
// };

// user.getMoney(1000);
// console.log(user);

// console.log(account.balance);

// account.getMoney(100);
// account.getMoney(1000);
// account.getMoney(10000);

// console.log(account.balance);
