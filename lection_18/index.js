//
// Модуль 9 - Заняття 18 - Проміси

// 1. Робота із Promise + setTimeout & setInterval.
// Необхібно написати функцію checkProductAvailability(productId),
// яка перевірятиме наявність певного товару на складі в інтернет-магазині.
// Для цього необхідно емутуівати запит до API магазину,
// який поверне вам інформацію про наявність товару.
// Роботу виконуємо в консолі, де демонструємо кожен крок на веб-сайті.
// Тобто: робимо запит -> чекаємо і показуємо лоадер -> отримуємо інформацію
// -> ховаємо лоадер -> показуємо результат.
// Додатково: зробити перевірку у разі, якщо запит виконається з помилкою,
// а саме якщо передамо неправильну id.

// const products = [
//   { id: "productId1", name: "Ноутбук", brand: "Lenovo" },
//   { id: "productId2", name: "Смартфон", brand: "Samsung" },
//   { id: "productId3", name: "Телевізор", brand: "LG" },
//   { id: "productId4", name: "Планшет", brand: "Apple" },
//   { id: "productId5", name: "Камера", brand: "Canon" },
// ];

// 2. Promise.all.
// Потрібно переписати попереню функцію так,
// щоб було можливість передачі масиву з продуктами ID.
// Запит не змінюється, реалізаціє лише на Front End частині.

// 3. Promise без setTimeout.
// Розібрати нижче наведений код.

// const imageUrls = [
//   "https://via.placeholder.com/150",
//   "https://via.placeholder.com/250",
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
//   .then((sucess) => console.log("All images loaded successfully"))
//   .catch(() => console.error("Error loading images"));
