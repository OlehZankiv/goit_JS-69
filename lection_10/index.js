//
//
//

// class User {
//   name = "Default";
//   age;
//   posts;
//   #password;

//   constructor({ name, age, posts }) {
//     this.name = name;
//     this.age = age;
//     this.posts = posts;
//   }

//   register(password) {
//     this.#password = password;
//     console.log("registered");
//   }
//   remindPassword(code) {
//     return this.#password;
//   }

//   get password() {
//     return this.#password;
//   }

//   set password(newPass) {
//     if (newPass.length > 4) return;

//     this.#password = newPass;
//   }
// }

// const user = new User({
//   name: "Oleh",
//   age: 22,
//   posts: [],
// });

// user.register("1111");
// console.log(user.password);

// user.password = "2222";

// console.log(user);

// const user = new User({
//   name: "Oleh",
//   age: 22,
//   posts: [],
// });

// const parent = {
//   name: "Petro",
// };

// const son = Object.create(parent);

// console.log(son.__proto__ === parent);

// console.log(user.__proto__ === User.prototype);

// Array.prototype.sayHello = () => {
//   console.log("Hello");
// };

// [].sayHello();

// const a = {};
// "wdw".slice();
// console.log(a.hasOwnProperty());

// class Calculator {
//   static PI = 3.14;
// }

// const a = new Calculator();

// console.log(Calculator.PI);

// new A();

// Модуль 5. Заняття 10. Прототипи та класи

// =>
// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок:
// User ${пошта} is ${вік} years old and has ${кількість постів} posts.
// Додай метод updatePostCount(value),
// який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
//   email = "";
//   age = 0;
//   #numberOfPosts = 0;
//   topics = [];

//   constructor({ email, age, numberOfPosts, topics }) {
//     this.age = age;
//     this.email = email;
//     this.#numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     if (typeof value !== "number") return;
//     if (value > 100) return;

//     this.#numberOfPosts += value;
//   }

//   get numberOfPosts() {
//     return this.#numberOfPosts;
//   }
// }

// const mango = new Blogger({
//   email: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   email: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });

// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// =>
// Example 2 - Сховище
// Напиши клас Storage, який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів
// і записуватиме його властивість items.

// Додай методи класу:
// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   #items = [];

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(item) {
//     this.#items.push(item);
//   }

//   removeItem(item) {
//     while (true) {
//       const index = this.#items.indexOf(item);

//       if (index === -1) break;

//       this.#items.splice(index, 1);
//     }
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// storage.addItem("🍌");
// storage.addItem("🍌");
// console.log(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍌");
// console.log(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]

// =>
// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email.
// Оголоси приватні властивості #login та #email,
// доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #email;
//   #login;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(value) {
//     this.#login = value;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(value) {
//     this.#email = value;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie

// =>
// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items.
// Замітка це об'єкт із властивостями text та priority.
// Додай класу статичну властивість Priority,
// у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   items = []; // {text: 'string', priority: 'string'} -> []

//   constructor(items) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     while (true) {
//       const index = this.items.findIndex((note) => note.text === text);

//       if (index === -1) break;

//       this.items.splice(index, 1);
//     }
//   }

//   updatePriority(text, newPriority) {
//     const index = this.items.findIndex((note) => note.text === text);

//     if (index === -1) return;

//     this.items[index].priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя друга замітка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя перша замітка");
// console.log(myNotes.items);

// myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
// console.log(myNotes.items);

// =>
// Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean}
// і оголошує одну властивість on - стан вкл/викл (true/false).
// За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   on = false;

//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("first");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("first");

// const secondToggle = new Toggle();
// console.group("second");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("second");
