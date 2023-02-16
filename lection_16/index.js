//
//

// const showInfo = (type) => {
//   if (type === "INFO") {
//     //
//     console.log("info");
//   } else if (type === "DATA") {
//     //
//     console.log("data");
//   } else {
//     throw new Error("This type of info is not exist");
//   }
// };

// Модуль 8 - Заняття 16 - Веб-сховище

// =>
// 1. Написати аналог магазину книжок з корзиною.
// Всі збережені користувачем дані зберігати в localStorage.
// Основні дані містяться у змінній books.

// Розбиваємо задачу на підзадачі:
//  * Створити сторінку з книжками за допомогою JS;
//  * Створити сторінку з корзиною за допомогою JS;
//  * Реалізувати функціонал вибору книжки;
//  * Підєднати допомогу localStorage.

class BookStorage {
  static KEY = "SELECTED_BOOKS";
  #selectedBooks = [];

  #getBooksFromStorage() {
    try {
      this.#selectedBooks =
        JSON.parse(localStorage.getItem(BookStorage.KEY)) || [];
    } catch (_) {
      this.#selectedBooks = [];
    }
  }

  constructor() {
    this.#getBooksFromStorage();
  }

  add = (book) => {
    this.#selectedBooks.push(book);
    localStorage.setItem(BookStorage.KEY, JSON.stringify(this.#selectedBooks));
  };

  hasBook = (book) => this.#selectedBooks.some(({ id }) => id === book.id);

  get selectedBooks() {
    return this.#selectedBooks;
  }
}

const bookStorage = new BookStorage();

const customCreator = (name, config = {}) => {
  const element = document.createElement(name);

  Object.entries(config).forEach(([key, value]) => {
    element[key] = value;
  });

  return element;
};

const root = document.querySelector("#root");

const createBookElements = (books, withAddButton) => {
  return books.map((book) => {
    const bookElement = customCreator("div", { className: "book" });

    const bookImg = customCreator("img", { src: book.url });
    const bookTitle = customCreator("h3", { textContent: book.name });

    bookElement.append(bookImg, bookTitle);

    if (withAddButton) {
      const bookButton = customCreator("button", {
        textContent: "Add to cart",
      });

      if (bookStorage.hasBook(book)) {
        bookButton.disabled = true;
        bookButton.textContent = "Added to card";
      }

      bookButton.addEventListener(
        "click",
        () => {
          bookButton.disabled = true;
          bookButton.textContent = "Added to card";
          bookStorage.add(book);
        },
        { once: true }
      );

      bookElement.appendChild(bookButton);
    }

    return bookElement;
  });
};

const createShopPage = () => {
  const wrapper = customCreator("div", { className: "content" });

  const bookElements = createBookElements(books, true);

  const cart = customCreator("button", {
    className: "cart",
    textContent: "CART",
  });

  cart.addEventListener("click", createCartPage, { once: true });

  wrapper.append(...bookElements, cart);

  root.innerHTML = "";
  root.appendChild(wrapper);
};

const createCartPage = () => {
  const wrapper = customCreator("div", { className: "content" });

  const bookElements = createBookElements(bookStorage.selectedBooks, false);

  const back = customCreator("button", {
    className: "back",
    textContent: "BACK",
  });

  back.addEventListener("click", createShopPage, { once: true });

  wrapper.append(...bookElements, back);

  root.innerHTML = "";
  root.appendChild(wrapper);
};

createShopPage();
