// const name = "Oleh";
// console.log(x);

// console.log("22" === 22);

// const mess = "Hello";
// const index = mess.indexOf("e");

// console.log("HELLO".toLowerCase());

// const age = 22;
// const nickname = "Oleh";

// const string = "My name is " + nickname + ". I'm " + age + ".";
// const string = `My name is ${nickname}. I'm ${age}.`;

// console.log(string);

// # Модуль 1. Занятие 1. Переменные, типы и операторы
// ## Example 1 - Математические операторы

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// ## Example 2 - Комбинированные операторы

// Замени выражение переопределения комбинированным оператором `+=`.

// let students = 100;

// students += 50;

// console.log(students);

// ## Example 3 - Приоритет операторов

// Разбери приоритет операторов в инструкции присвоения значения переменной
// `result`.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ## Example 4 - Класс Math

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

// const value = 27.5;

// console.log(Math.ceil(value));

// ## Example 5 - Шаблонные строки

// Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
// переменные вставленные в строку.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ## Example 6 - Методы строк и чейнинг

// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого
// необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных `weight` и `height`, но не как числа, а в
// виде строк (специально для задачи). Нецелые числа могут быть заданы в виде
// `24.7` или `24,7`, то есть в качестве разделителя дробной части может быть
// запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// let weight = "88,3";
// weight = Number(weight.replace(",", "."));

// let height = "1.75";
// height = Number(height);

// const bmi = Number((weight / height ** 2).toFixed(1));

// console.log(bmi); // 28.8

// ## Example 7 - Операторы сравнения и приведение типов

// Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= "7");

// console.log("abb" < "ba");

// console.log("4" == 4);

// console.log("6" === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log("0" == false);

// console.log("0" === false);

// console.log("Papaya" < "papaya");

// console.log("Papaya" === "papaya");

// console.log(undefined == null);

// console.log(undefined === null);

// ## Example 8 - Логические операторы

// Каким будет результат выражений?

// && -> повертає першу брехню, або останню правду
// || -> повертає першу правду, або останню брехню

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "kiwi");

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log(null > 0);

// console.log(null || (2 && 3) || 4);

// ## Example 9 - Значение по умолчанию и оператор нулевого слияния

// Отрефактори код так, чтобы в переменную `value` присваивалось значение
// переменной `incomingValue`, если оно не равно `undefined` или `null`. В
// противном случае должно присваиваться значение `defaultValue`. Проверь работу
// скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
// false. Используй оператор `??` (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 18;
// const age = incomingValue ?? defaultValue;
// console.log(age);

// const name = "Oleh";
// const surname = "Zankiv";
// const nickname = "zaets";

// const str = nickname || surname || name;
// console.log(str);
// ```

// ## Example 10 - Опертор % и методы строк

// Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

// const totalMinutes = 70;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
//
