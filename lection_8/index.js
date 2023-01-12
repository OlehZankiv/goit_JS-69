//
//

// const getNewUser = (user) => {
//   return {
//     ...user,
//     created: Date.now(),
//   };
// };

// const user = {
//   id: "1",
//   name: "Ivan",
// };

// const res = getNewUser(user);
// const res2 = getNewUser(user);
// const res3 = getNewUser(user);
// const res4 = getNewUser(user);

// console.log(res);

// const arr = [{ price: 500 }, { price: 800 }, { name: "wdwd" }, { price: 800 }];

// const newArr = arr.filter((dish) => dish.price < 600);

// const users = [
//   { name: "Ivan", age: 18, type: "Admin" },
//   { name: "Oleh", age: 22, type: "User" },
//   { name: "Ivan", age: 16, type: "Admin" },
//   { name: "Anna", age: 24, type: "User" },
//   { name: "Petro", age: 32, type: "Owner" },
// ];

// const res = users.filter((user) => user.age < 18);

// console.log(res);

// console.log(newArr);

// arr.forEach((value, i) => {
//   console.log(value, i);
// });

// const newArr = arr.map((dish) => {
//   return {
//     ...dish,
//     price: dish.price + dish.price * 0.2,
//   };
// });

// const res = arr.map((value) => value);

// console.log(res);

// console.log(newArr);
// console.log(newArr);

// const users = [
//   { name: "Ivan", age: 18, type: "Admin" },
//   { name: "Oleh", age: 22, type: "User" },
//   { name: "Vika", age: 16, type: "Admin" },
//   { name: "Anna", age: 24, type: "User" },
//   { name: "Petro", age: 32, type: "Owner" },
// ];

// const res = users.reduce(
//   (previousValue, currentValue) => previousValue + currentValue.age,
//   0
// );

// console.log(res);

// const user = users.find((element) => element.type === "Owwdwdner");
// console.log(user);

// Модуль 4. Заняття 8. Перебираючі методи масиву

// Колекція об'єктів для всіх прикладів з автомобілями
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// =>
// Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (cars) => {
//   return cars.map((car) => car.model);
// };

// console.table(getModels(cars));

// =>
// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів
// із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => ({
//     ...car,
//     price: car.price * (1 - discount),
//   }));
// };

// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));

// =>
// Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів
// ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((car) => car.price < threshold);
// };

// console.table(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));

// =>
// Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів
// властивість onSale яких true.

// const getCarsWithDiscount = (cars) => {
//   return cars.filter((car) => car.onSale);
// };

// console.log(getCarsWithDiscount(cars));

// =>
// Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів
// тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => {
//   return cars.filter((car) => car.type === type);
// };

// console.log(getCarsWithType(cars, "suv"));
// console.log(getCarsWithType(cars, "sedan"));

// =>
// Example 6 - Метод find
// const getCarByModel = (cars, model) => {
//   return cars.find((car) => car.model === model);
// };

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, 'CX-9'));

// =>
// Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів
// відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = (cars) => {
//   // return [...cars].sort((a, b) => (a.amount > b.amount ? 1 : -1));
//   return [...cars].sort((a, b) => a.amount - b.amount);
// };

// console.log(sortByAscendingAmount(cars));

// =>
// Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів
// відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = (cars) => {
//   return [...cars].sort((a, b) => b.price - a.price);
// };

// console.log(sortByDescendingPrice(cars));

// =>
// Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований
// за назвою моделі в алфавітному та зворотному алфавітному порядку,
// в залежності від значення параметра order.

// const sortByModel = (cars, order) => {
//   switch (order) {
//     case "asc":
//       return [...cars].sort((a, b) => a.model.localeCompare(b.model));
//     case "desc":
//       return [...cars].sort((a, b) => b.model.localeCompare(a.model));
//     default:
//       return cars;
//   }
// };

// console.log(sortByModel(cars, "asc"));
// console.log(sortByModel(cars, "desc"));

// =>
// Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів
// (значення властивостей amount).

// const getTotalAmount = (cars = []) => {
//   return cars.reduce((total, curr) => total + curr.amount, 0);
// };

// console.log(getTotalAmount(cars));

// =>
// Example 11 - Ланцюжки методів
// Нехай функція getModelsOnSale повертає масив моделей автомобілів,
// але тільки тих, які зараз на розпродажі.

// 1. filter
// 2. map
// const getModelsOnSale = (cars = []) => {
//   return cars.filter((car) => car.onSale).map((car) => car.model);
// };

// console.log(getModelsOnSale(cars));

// =>
// Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів
// на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// chaining
// 1. filter
// 2. sort
// const getSortedCarsOnSale = (cars = []) => {
//   return cars.filter((car) => car.onSale).sort((a, b) => a.price - b.price);
// };

// console.log(getSortedCarsOnSale(cars));

// array sort ->

// const arr = [
//   { age: 18, name: "Oleh" },
//   { age: 22, name: "Ivan" },
//   { age: 22, name: "Anna" },
//   { age: 31, name: "Oleh" },
//   { age: 25, name: "Vika" },
// ];

// console.log(arr.sort((a, b) => a.name.localeCompare(b.name)));

// # 1
// some
// Створити функцію, яка повертає знаєння boolean в залежності від того
// чи є хоча б один тип авто кількість яких більше ніж 10

// # 2
// every
// Створити функцію, яка повертає знаєння boolean в залежності від того
// чи всі машини у вибірці дорогі (дорогі означає, що ціна авто більше ніж 30 000)
