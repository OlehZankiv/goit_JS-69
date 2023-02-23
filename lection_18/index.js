//
//
//

// const getUsers = (onEnd) => {
//   throw new Error("HEPojdipaj");

//   setTimeout(() => {
//     onEnd([{ name: "Oleh" }]);
//   }, 1000);
// };

// try {
//   getUsers((user) => {
//     console.log(user);
//   });
// } catch (e) {
//   console.log(e);
// }

// const promise = new Promise((res, rej) => {
//   setTimeout(() => res({ data: { items: [{ name: "Oleh" }] } }), 1000);
//   setTimeout(() => rej("ERROR"), 400);
// });

// promise
//   .then((res) => res.data.items)
//   .then((users) => console.log(users))
//   .catch((error) => error)
//   .finally(() => "woidawdhj");

// Promise.resolve("a")
//   .then((p) => p + "d") // ad
//   .catch((p) => p + "b") // ab
//   .catch((p) => p + "c")
//   .finally((p) => p + "c")
//   .then((p) => p + "d") // add
//   .then((p) => console.log(p));

// Якщо проміс видав помилку
// В перший catch - дальше в then..... - finally
// Якщо проміс видав успіх
// В перший then.... - finally

// for (let i = 0; i < 10000000000; i++) {
//     const element = array[i];

// }

// const time = Date.now();
// setTimeout(() => console.log(Date.now() - time), 1000);

// setTimeout(() => {
//   for (let i = 0; i < 1000000000; i++) {
//     const a = 999 + 11 / 11;
//   }
// }, 900);

// Модуль 9 - Заняття 18 - Проміси

// 1. Робота із Promise + setTimeout & setInterval.
// Необхібно написати функцію checkProductAvailability(productId),
// яка перевірятиме наявність певного товару на складі в інтернет-магазині.
// Для цього необхідно імітувати запит до API магазину,
// який поверне вам інформацію про наявність товару.
// Роботу виконуємо в консолі, де демонструємо кожен крок на веб-сайті.
// Тобто: робимо запит -> чекаємо і показуємо лоадер -> отримуємо інформацію
// -> ховаємо лоадер -> показуємо результат.
// Додатково: зробити перевірку у разі, якщо запит виконається з помилкою,
// а саме якщо передамо неправильну id.

const products = [
  { id: "productId1", name: "Ноутбук", brand: "Lenovo" },
  { id: "productId2", name: "Смартфон", brand: "Samsung" },
  { id: "productId3", name: "Телевізор", brand: "LG" },
  { id: "productId4", name: "Планшет", brand: "Apple" },
  { id: "productId5", name: "Камера", brand: "Canon" },
];

const makeRequest = (productId) =>
  new Promise((res, rej) => {
    if (typeof productId !== "string") rej("It's not correct id");

    setTimeout(() => {
      const wasFoundProduct = products.some(({ id }) => id === productId);

      if (wasFoundProduct) res(`GOOD, we found product (${productId})`);
      else rej("404. We can't find product with this id");
    }, Math.random() * 2000 + 1000);
  });

// const checkProductAvailability = (productId) => {
//   const interval = setInterval(() => console.log("Loading..."), 100);

//   makeRequest(productId)
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))
//     .finally(() => clearInterval(interval));
// };

// checkProductAvailability("productId1");

// 2. Promise.all.
// Потрібно переписати попередню функцію так,
// щоб була можливість передачі масиву з продуктами ID.
// Запит не змінюється, реалізація лише на Front End частині.

// const checkProductAvailability = (productIds = []) => {
//   const interval = setInterval(() => console.log("Loading..."), 100);

//   Promise.all(productIds.map(makeRequest))
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))
//     .finally(() => clearInterval(interval));
// };

// checkProductAvailability(["productId1", "produc23123tId2", "productI12323d3"]);

// 3. Promise без setTimeout.
// Розібрати нижче наведений код.

// const imageUrls = [
//   "https://via.placeholder.com/150",
//   "https://via.placeholder.com/250",
//   "https://via.placeholder.com/251_a",
// ];

// const loadImage = (url) =>
//   new Promise((resolve, reject) => {
//     const img = new Image();
//     img.src = url;

//     img.onload = () => resolve(url);
//     img.onerror = () => reject(url);
//   });

// const loadImages = (urls) => {
//   const promises = urls.map(loadImage);
//   return Promise.all(promises);
// };

// loadImages(imageUrls)
//   .then((sucess) => console.log("All images loaded successfully", sucess))
//   .catch(() => console.error("Error loading images"));
