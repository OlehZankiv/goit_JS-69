//

// const doneActions = [];

// const clean = () => {
//   // Замітаємо
//   doneActions.push("Позамітали");
//   // Миємо підлогу
//   doneActions.push("Помили підлогу");
//   // Миємо посуд
//   doneActions.push("Посуд помитий");
//   // Поскладати одяг
//   doneActions.push("Одяг поскладано");
// };

// const cleanAsync = () => {
//   robotClean(() => {
//     doneActions.push("Позамітали");
//     robotClean(() => doneActions.push("Помили підлогу"), "water");
//   });

//   dishWasher(() => doneActions.push("Посуд помитий"));

//   // Поскладати одяг
//   doneActions.push("Одяг поскладано");
// };

// clean();

// const timeout = setTimeout(() => {
//   console.log("HELLO");
// }, 1000);

// const timeout2 = setTimeout(() => {
//   console.log("HELLO2");
// }, 2000);

// clearTimeout(timeout);

// let currentDate = Date.now();
// let i = 0;

// setInterval(() => {
//   i += Date.now() - currentDate;
//   console.log(i);
//   currentDate = Date.now();
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
// }, 3000);

// const date = new Date("1969-02-01 23:12:44");

// date.setMonth(10);

// console.log(date.toISOString());

// console.log(date.getTime());

// Модуль 9 - Заняття 17 - Таймери та час

// =>
// 1. Робота з setTimeout.
// Напишіть функцію showNotification(message, duration),
// яка відображає повідомлення на сторінці на деякий час duration мілісекунд,
// а потім приховує його.
// Наприклад, при виклику showNotification('Hello, world!', 3000),
// на сторінці з'явиться повідомлення "Hello, world!" на 3 секунди,
// а потім автоматично зникне.
// При кліку на хрестик, повідомлення закривається швидше.

/* 
    <div class="notification-message">
        HELLO WORLD
        <div class="close-icon"></div>
    </div>
*/

// const notificationContainer = document.querySelector(".notification-container");

// const createNotification = (text) => {
//   const notification = document.createElement("div");
//   notification.className = "notification-message";
//   notification.textContent = text;

//   const close = document.createElement("div");
//   close.className = "close-icon";

//   notification.appendChild(close);

//   return { notification, close };
// };

// const showNotification = (message, duration) => {
//   const { notification, close } = createNotification(message);
//   notificationContainer.appendChild(notification);

//   const timeoutID = setTimeout(() => {
//     notification.remove();
//   }, duration);

//   close.addEventListener("click", () => {
//     clearTimeout(timeoutID);
//     notification.remove();
//   });
// };

// showNotification("HELLO", 3000);

// =>
// 1. Робота з датами та setInterval.
// Напишіть функцію updateCurrency(),
// яка буде виводити ціну долара в залежності від часу.
// Дані зберігаються в масиві usdToUah та datesOfChange.
// Вивід має змінуватись кожну секунду і повинен бути циклічним.
// FORMAT: "2021 March Friday (12)                      27.15 UAH"

// const usdToUah = [
//   27.95, 27.9, 27.78, 27.65, 27.15, 26.99, 27.2, 26.98, 26.57, 26.53,
// ];

// const datesOfChange = [
//   new Date("2021-03-12"),
//   new Date("2021-04-28"),
//   new Date("2021-05-12"),
//   new Date("2021-06-04"),
//   new Date("2021-07-01"),
//   new Date("2021-08-24"),
//   new Date("2021-09-23"),
//   new Date("2021-10-05"),
//   new Date("2021-11-01"),
//   new Date("2021-12-09"),
// ];

// const stockDate = document.querySelector(".stock-date");
// const stockPrice = document.querySelector(".stock-price");

// const updateInfoCreator = () => {
//   let index = 0;

//   return () => {
//     const dateText = moment(datesOfChange[index]).format(
//       "YYYY MMMM dddd (DD) HH:mm"
//     );

//     stockDate.textContent = dateText;
//     stockPrice.textContent = usdToUah[index];

//     if (index === usdToUah.length - 1) index = 0;
//     else index += 1;
//   };
// };

// setInterval(updateInfoCreator(), 1000);
