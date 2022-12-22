//
//
//

// function foo(x) {
// console.log(x);
// }

// foo("Hello")

// foo();
// foo2();

// function add(a, b) {
//   const sum = a + b;

//   return sum;
// }

// const res = add(10, 20);
// console.log(res);

// console.log(add(12, 5));
// console.log(add(30, 10));
// console.log(add(24, 8));

// ___
// ___ -> id -> getUser(id)
// ___
// ___
// ___

// [_-_] -> getUser() -> ['', '']

// function getUser(id=null) {
//   if (userId === id) {
//     return user;
//   }
// }

// getUser("awdwd-awdwdaw-awdawdw-12dwfawfd");

// function foo() {
//   console.log(arguments);
// }

// foo("b", "a");

// const getName = function () {
//   return "Oleh";
// };

// console.log(typeof getName);

// const name = getName();

// console.log(name);

// const c = 100;

// const type = "Admin";

// if (type === "Admin") {
//   const c = 200;
//   console.log(c);
// }
// function f() {}

// const res = f();
// console.log(res);

// function logUserInfo(name, age, ...rest) {
//   console.log(`My name is ${name}. I'm ${age}. ${rest}`);
// }

// logUserInfo("Oleh", 22, "Zankiv", 2, 2, "Wdwd", "wdwdw");

// console.log(Math.max(1, 4, 1, 6, 9, 199, 232));

// Модуль 2. Заняття 4. Функції

// =>
// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight = "", height = "") {
//   const parcedWeight = Number(weight.replace(",", "."));
//   const parcedHeight = Number(height.replace(",", "."));

//   return (parcedWeight / parcedHeight ** 2).toFixed(1);
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

// =>
// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// const min = function (a, b) {

//     if (a < b) return a
//     else return b

//     return a < b ? a : b

//     return Math.min(a, b)
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// =>
// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядка.
// Значення гарантовано розділені пробілом.

// function getRectArea(dimensions = "") {
//   const data = dimensions.split(" "); // ["8", "11"]

//   return data[0] * data[1];
// }

// console.log(getRectArea("8 11"));

// =>
// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
// який для кожного елемента масиву буде виводити в консоль повідомлення
// у форматі <номер елемента> - <значення елемента>.
// Нумерація елементів повинна починатися з 1.
// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax']
// з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// const logItems = function (items = []) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1}: ${items[i]}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// =>
// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones),
// яка виводить у консоль ім'я та телефонний номер користувача.
// У параметри names та phones будуть передані рядки імен та телефонних номерів,
// розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(...rest) {
//   const namesArr = rest[0].split(",");
//   const phonesArr = rest[1].split(",");
//   const yearsArr = rest[2].split(",");

//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(
//       `name: ${namesArr[i]}; phone: ${phonesArr[i]}; age: ${yearsArr[i]}`
//     );
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300",
//   "28,21,18,31"
// );

// =>
// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {
//   return Math.max(...numbers);
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// =>
// Example 7 - Середнє значення
// Напишіть функцію calAverage(), яка приймає довільну кількість аргументів
// і повертає їхнє середнє значення.
// Усі аргументи будуть лише числами.

// function calAverage(...args) {
//   let sum = 0;

//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }

//   return sum / args.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// =>
// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes),
// яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60)
//     .toString()
//     .padStart(2, 0);
//   const min = (minutes % 60).toString().padStart(2, 0);

//   return `${hours}:${min}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// =>
// Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(newCourse) {
//   if (courses.includes(newCourse)) {
//     console.log("Ви вже маєте такий курс");
//     return;
//   }

//   courses.push(newCourse);
// }

// function replaceCourse(name, newName = null) {
//   const courseIndex = courses.indexOf(name);

//   if (courseIndex === -1) {
//     console.log("Курс із таким ім'ям не знайдено");
//     return;
//   }

//   courses.splice(courseIndex, 1);
// }

// function updateCourse(name, newName) {
//   const courseIndex = courses.indexOf(name);

//   if (courseIndex === -1) {
//     console.log("Курс із таким ім'ям не знайдено");
//     return;
//   }

//   courses[courseIndex] = newName;
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'Ви вже маєте такий курс'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс із таким ім'ям не знайдено'

// updateCourse("Express", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// let count = 0;

// function foo() {
//   if (count > 5) return;

//   count += 1;

//   foo();
// }

// foo();

// console.log(count);

// function factorial(num) {
//   if (num === 1) return ;

//   return num * factorial(num - 1);
// }

// console.log(factorial(15)); // 120

// let count = 1;

// for (let i = 2; i <= 10; i++) {
//   count *= i;
// }

// console.log(count);
