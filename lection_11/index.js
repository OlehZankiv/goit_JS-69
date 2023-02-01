//
//

// Модуль 6. Заняття 11. DOM

// =>
// 1. Створити список технологій, що вивчаються на курсі Fullstack за допомогою js.
// Показати як це робиться через map та reduce.

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const technologiesList = document.querySelector(".list");

// #1
// const innerHTMLList = technologies
//   .map((technologie) => `<li>${technologie}</li>`)
//   .join("");

// #2
// const innerHTMLList = technologies.reduce(
//   (html, currentItem) => html + `<li>${currentItem}</li>`,
//   ""
// );

// technologiesList.innerHTML = innerHTMLList;

// =>
// 2. Створити кілька кнопок на основі масива з обєктами використовуючи createElement.

// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];

// const container = document.querySelector(".container");

// const buttons = colors.map(({ color, label }) => {
//   const button = document.createElement("button");
//   button.textContent = label;
//   button.style.backgroundColor = color;

//   return button;
// });

// container.append(...buttons);

// =>
// 3. Створити сайт з такою розміткою використовуючи лише JS, в html файлі має бути пусто

// const customCreator = (name, config = {}) => {
//   const element = document.createElement(name);

//   Object.entries(config).forEach(([key, value]) => {
//     element[key] = value;
//   });

//   return element;
// };

// const main = customCreator("main", { id: "main" });

// const title = customCreator("h1", {
//   id: "title",
//   textContent: "- Michel Legrand -",
// });

// const figure = customCreator("figure", { id: "img-div" });

// const figureImg = customCreator("img", {
//   id: "image",
//   src: "https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg",
//   alt: "Michel Legrand conducting his orchestra.",
// });

// const figcaption = customCreator("figcaption", {
//   id: "ing-caption",
//   textContent: "Michel Legrand conducting his orcherstra.",
// });

// figure.append(figureImg, figcaption);

// main.append(title, figure);
// // END
// document.body.prepend(main);
