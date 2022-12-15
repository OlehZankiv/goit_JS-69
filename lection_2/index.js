//
//
//
//
//
//
//

// const name = "Oleh";

// if (name === "Oleh") {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// console.log(name === "Oleh" ? "YES" : "NO");

// let color = "yellow";

// switch (color) {
//   case "yellow":
//   case "white":
//   case "red":
//   case "orange":
//     console.log("It's light color");
//     break;
//   case "black":
//     console.log("It's dark color");
//     break;
// }

// let age = 18;

// let newAge = 10 + age++;

// console.log(newAge, age);
//

// Модуль 1. Занятие 2. Ветвления. Циклы

// =>
// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript,
// то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// const result = prompt("Какое официальное название JavaScript?");

// if (result.toLowerCase() === "ECMAScript".toLowerCase()) {
//   console.log("Верно!");
// } else {
//   console.log("Не знаете? ECMAScript!");
// }

// const isCorrectAnswer = result.toLowerCase() === "ECMAScript".toLowerCase();
// alert(isCorrectAnswer ? "Верно!" : "Не знаете? ECMAScript!");

// =>
// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в
// виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0,
// то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 10;

// let timestring = `${hours}hr`;

// if (minutes > 0) {
//   timestring += ` ${minutes}m`;
// }

// console.log(timestring); // "14 год. 26 хв."

// =>
// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число",
// если в prompt пользователь ввел число больше нуля. Если был введен ноль,
// выводи в консоль строку "Это ноль". Если передали отрицательное число, в
// консоли должна быть строка "Это отрицательное число".

// const userInput = Number(prompt("Введите число"));

// if (isNaN(userInput)) {
//   console.log("It's not a number");
// } else if (userInput === 0) {
//   console.log("It's 0");
// } else {
//   console.log(userInput > 0 ? "More than 0" : "Less than 0");
// }

// if (userInput > 0) {
//   console.log("More than 0");
// } else if (userInput < 0) {
//   console.log("Less than 0");
// } else if (userInput === 0) {
//   console.log("It's 0");
// } else {
//   console.log("It's not a number");
// }

// =>
// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 250;
// const b = 150;

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// =>
// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение
// переменной link символом /. Если нет, добавь в конец
// значения link этот символ. Используй конструкцию if...else.

// let link = "https://my-site.com/about";
// // Пиши код ниже этой строки

// if (link[link.length - 1] === "/") {
// } else {
//   link += "/";
// }

// // Пиши код выше этой строки
// console.log(link);

// =>
// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной
// link символом /. Если нет, добавь в конец значения link этот символ,
// но только в том случае, если в link есть подстрока "my-site".
// Используй конструкцию if...else.

// let link = "https://my-site.com/about";
// // Пиши код ниже этой строки

// if (!link.endsWith("/") && link.includes("my-site")) {
//   link += "/";
// }

// // Пиши код выше этой строки
// console.log(link);

//
//
//
//
//
//
// =>
// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

// =>
// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера
// строку в зависимости от значения переменной hours.

// Если значение переменной hours:
// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24, выводи строку "Overdue"

// const hours = 27;

// if (hours < 17) console.log("Pending");
// else if (hours > 24) console.log("Overdue");
// else console.log("Expires");

// =>
// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта.
// Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки

// =>
// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сегодня");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Сегодня");
//     break;
//   case 0:
//     console.log("Послезавтра");
//     break;
//   default:
//     console.log("Дата в будущем");
//     break;
// }

// =>
// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера
// числа по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// =>
// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью
// prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = prompt("Please enter me your login:");

// if (login === "Admin") {
//   const password = prompt("Please enter your password:");

//   if (!password) {
//     console.log("Cancel");
//   } else {
//     if (password === "I am admin") console.log("Hello!");
//     else console.log("Password is incorrect");
//   }
// } else {
//   console.log("I don't know who your are");
// }

switch (carType) {
  case "sedan":
    console.log("show sedan icon");
    break;
  case "universal":
    console.log("show universal icon");
    break;
}
