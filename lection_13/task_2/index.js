//
// Модуль 7. Заняття 13. Делегування подій

// =>
// EXAMPLE: https://i.stack.imgur.com/iazYL.png
// 2. Створити кнопку з текстом "BUY PRODUCT" та додатковим елементом "?",
// який розташовується всередині кнопки, з правого боку.
// При кліку на кнопку:
//  * Текст кнопки змінюється на "THANK YOU";
//  * Кнопка змінюється на не активну;
//  * Елемент "?" видаляється.
// При кліку на цей елемент зʼявляється невеличке вікно з описом даної кнопки:
//  * Назва кнопки;
//  * Ціна за продукт;
//  * Опис товару.
//  Всі дані випадкові.

const button = document.querySelector("button");
const infoButton = document.querySelector("button .info");
const infoContainer = document.querySelector("button .info-container");

const infoButtonClickHandler = (e) => {
  e.stopPropagation();
  infoContainer.classList.toggle("hidden");
};
const infoContainerClickHandler = (e) => e.stopPropagation();

infoButton.addEventListener("click", infoButtonClickHandler);

infoContainer.addEventListener("click", infoContainerClickHandler);

button.addEventListener(
  "click",
  () => {
    button.innerHTML = "THANK YOU";
    button.disabled = true;
    button.classList.add("disabled");
    infoButton.removeEventListener("click", infoButtonClickHandler);
    infoContainer.removeEventListener("click", infoContainerClickHandler);
  },
  { once: true }
);
