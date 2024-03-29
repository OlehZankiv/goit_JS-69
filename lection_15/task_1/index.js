// Модуль 8. Заняття 15 Модульність коду

// =>
// Основне завдання даного завдання полягає в тому,
// щоб розібратись з основами роботи із npm, webpack.

// 1. Консоль і робота з базовими командами;
//   1.1. Основна інформація;
//   1.2. Навігація ee(cd, ls, pwd, clear, .., .);
//   1.3. Видалення, створення та зміна файлів (touch, mkdir, mv, rm [-rf]); ** man **
// 2. NPM (Пакетний менеджер);
//   2.1. Node.JS;
//   2.2. Інсталяція + package.json [scripts];
//   2.3. Встановлення та видалення модулів [--save, --save-dev];
//   2.4. Робота з throttle та npm;

// 3. Задача: вивести дані в консоль із текстового файлу text.txt (linebyline);

const readline = require("linebyline");

const rl = readline("./text.txt");

rl.on("line", function (line, lineCount, byteCount) {
  console.log("READ: " + line, lineCount, byteCount);
}).on("error", function (e) {
  console.log("Something went wrong: " + e);
});
