//
//

// const input = document.querySelector("#input");
// const h2 = document.querySelector("h2");

// const handleInput = _.debounce(() => {
//   for (let i = 0; i < 10000000; i += 1) {
//     const arr = [];
//     arr.push(1000);
//     arr.push(1000);
//   }

//   h2.textContent = input.value;
// }, 1000);

// input.addEventListener("input", handleInput);

// Модуль 7. Заняття 14 throttle/debounce и lazyload

// =>
// 1. Імплементувати власний курсор мишки.
// Використовувати допоміжні бібліотеки для оптимізації.
// Завдання з * -> добавити зміну курсора на ховер використовуючи джаваскріпт.

// const cursor = document.querySelector(".cursor");

// const customMouseHandler = _.throttle((e) => {
//   e.target.nodeName === "BUTTON" ?
//     cursor.classList.add("hover") :
//     cursor.classList.remove("hover");

//   cursor.style.top = `${e.clientY}px`;
//   cursor.style.left = `${e.clientX}px`;
// }, 15);

// document.addEventListener("mousemove", customMouseHandler);
