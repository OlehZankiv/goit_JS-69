//
//

// ПОДІЯ -> ХЕДЛЕР -> КОД

// const button = document.querySelector("#button");

// button.addEventListener("focusin", () => {
//   console.log("IN");
// });

// button.addEventListener("focus", () => {
//   console.log("FOCUS");
// });

// button.addEventListener("focusout", () => {
//   console.log("OUT");
// });

// const f1 = (e) => {
//   e.preventDefault();
//   button.style.backgroundColor = "red";

//   button.removeEventListener("click", f1);
// };

// const f2 = (event) => {
//   console.log(event);
// };

// button.addEventListener("click", f1);
// button.addEventListener("click", f2);
//

// Модуль 6. Заняття 12. Події

// =>
// 1. Створити модальне вікно,
// яке буде відкриватися при кліку на кнопку всередині тега body.
// Модальне вікно має закриватися при кліку на напівпрозорий оверлей
// та на іконку хрестика модального вікна.

const loginButton = document.querySelector(".login-button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal .overlay");
const modalCloseIcon = document.querySelector(".modal-content .close");

const escapeHandler = (event) => {
  if (isModalVisible() && event.code === "Escape") closeModal();
};

const isModalVisible = () => !modal.classList.contains("hidden");
const isErrorFormVisible = () => !formError.classList.contains("hidden");

const showError = () => {
  if (!isErrorFormVisible()) formError.classList.remove("hidden");
};

const hideError = () => {
  if (isErrorFormVisible()) formError.classList.add("hidden");
};

const openModal = () => {
  if (!isModalVisible()) {
    modal.classList.remove("hidden");

    document.addEventListener("keydown", escapeHandler);
  }
};
const closeModal = () => {
  if (isModalVisible()) {
    modal.classList.add("hidden");
    hideError();
    document.removeEventListener("keydown", escapeHandler);
  }
};

loginButton.addEventListener("click", openModal);
modalOverlay.addEventListener("click", closeModal);
modalCloseIcon.addEventListener("click", closeModal);

// =>
// 2. Додати в модалку логіку закриття при натисканні на кнопку Escape

// =>
// 3. Створити форму реєстрації користувача за допомогою js, де буде 2 поля:
//     * Поле логін;
//     * Поле пароль.
// Не забудьте додати кнопку "Submit".
// Вірні логін і пароль зберігаються в константах;

// 3.1 Додати логіку підтвердження форми.
// При натисканні на кнопку "Submit" перевіряємо введені логін і пароль:
//     * Якщо логін і пароль співпадають,
// то переходимо на нову сторінку веб-сайту (тобто видаляємо все з документа)
// і показуємо <h2> з написом "Вхід успішний";
//     * Якщо логін і пароль не вірні,
// то показуємо під формою текст <p> червоним кольором "Логін або пароль не вірні".

const correctLogin = "user@goit.com";
const correctPassword = "1111";

const loginForm = document.querySelector("#login-form");
const formError = document.querySelector(".error");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  if (
    form.get("login") === correctLogin &&
    form.get("password") === correctPassword
  ) {
    closeModal();

    document.body.innerHTML = `
        <h2 style="color:green;">Вхід успішний</h2>
    `;
  } else showError();
});
