//
//

// Модуль 11 - Заняття 21 - CRUD
// 1. UsersServer
// Є два файли: server.js i client.js;
// Створити кастомний сервер на UI стороні за допомогою класу.
// За допомогою нього створити запити на CRUD операції, а саме:
//  * Стягнути всіх користувачів із псевдо-сервера;
//  * Видалити користувача із псевдо-сервера;
//  * Оновити користувача на псевдо-сервері;
//  * Створити користувача на псевдо-сервері.
// Все має працювати асинхронно за допомогою промісів;
// Користувачі мають зберігатись в localStorage,
// щоб створити ілюзію реального сервера з валідаціями.
// Псевдо-сервер має працювати аналогічно, як і функція fetch.
// ** Якщо залишиться час, добавити до класу функціонал, який буде виводити
//    в консоль інформацію, якщо щось загружається в даний момент.
// ******
// ПС - псевдо-сервер
// Допомога і кроки для виконання:
// 1. Написати кастомний json, string (аналог response.json());
// 2. Написати в ПС статичні посилання;
// 3. Зберігати у ПС змінну users(get, set), підтримувати storage;
// 4. Написати для ПС функцію fetch;
// 5. Написати switch case для перевірки method (GET, POST, PUT, DELETE);
// 6. Написати для ПС функції get та post -> put, delete за необхідністю;
// 7. Написати логіку пагінацій та отримання відповіді за допогою Promise для:
//      * GET; *POST; *PUT; *DELETE;

const server = new UsersServer();

const check404Error = (res) => {
  const response = json(res);

  if (!response.ok && response.status === 404) {
    throw new Error("404. Page not found");
  }
};

const showError = (e) => console.log(e);

server
  .fetch(UsersServer.USERS_URL)
  .then((res) => {
    check404Error(res);

    console.log(json(res));
  })
  .catch(showError);

// server
//   .fetch(UsersServer.USERS_URL, {
//     method: "POST",
//     body: stringify({ name: "Ivan", age: 18 }),
//   })
//   .then((res) => {
//     check404Error(res);
//     console.log(json(res));
//   })
//   .catch(showError);

// server
//   .fetch(UsersServer.USERS_URL + "e1d4b7d0-46a7-b488-23d2-cf4e51386166", {
//     method: "DELETE",
//   })
//   .then((res) => {
//     check404Error(res);
//     console.log(json(res));
//   })
//   .catch(showError);

// server
//   .fetch(UsersServer.USERS_URL, {
//     method: "PUT",
//     body: stringify({
//       id: "e1d4b7d0-46a7-b488-23d2-cf4e51386166",
//       name: "Oleh",
//       age: 22,
//     }),
//   })
//   .then((res) => {
//     check404Error(res);
//     console.log(json(res));
//   })
//   .catch(showError);
