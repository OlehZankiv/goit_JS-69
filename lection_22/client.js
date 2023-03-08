//
//

//
// =>
// Модуль 11 - Заняття 21 - CRUD
// 1. async/await
// Переписати код нижче на async / await;

const server = new UsersServer();

// CRUD
const createUser = (user) =>
  server
    .fetch(UsersServer.USERS_URL, {
      method: "POST",
      body: stringify(user),
    })
    .then((users) => json(users))
    .catch(showError);

const getUsers = () =>
  server
    .fetch(UsersServer.USERS_URL)
    .then((users) => json(users))
    .catch(showError);

const updateUser = (user) =>
  server
    .fetch(UsersServer.USERS_URL, { method: "PUT", body: stringify(user) })
    .then((users) => json(users))
    .catch(showError);

const deleteUser = (id) =>
  server
    .fetch(UsersServer.USERS_URL + id, { method: "DELETE" })
    .then((users) => json(users))
    .catch(showError);

// HELPERS
const deleteAllUsers = () =>
  getUsers().then((users) =>
    Promise.all(users.map((user) => deleteUser(user.id)))
  );

const showError = (e) => console.log(e);

// MAIN LOGIC

const createInitialUsers = () => {
  Promise.all([
    createUser({ name: "Oleh", age: 22 }),
    createUser({ name: "Ivan", age: 21 }),
    createUser({ name: "Anna", age: 24 }),
    createUser({ name: "Svitlana", age: 18 }),
    createUser({ name: "Dmytro", age: 26 }),
    createUser({ name: "Sophia", age: 32 }),
  ])
    .catch(showError)
    .finally(() => getUsers().then((users) => renderUsers(users)));
};

const usersList = document.querySelector(".users-list");

const renderUsers = (users) => {
  usersList.innerHTML = users.reduce(
    (html, user) =>
      html +
      `
      <div class="user">
        <div class="user-icon"></div>
        <div class="info">
          <div class="user-name">${user.name}</div>
          <div class="user-age">${user.age}</div>
        </div>
        <button data-userId=${user.id} class="delete">DELETE</button>
      </div>
  `,
    ""
  );
};

usersList.addEventListener("click", (e) => {
  const userId = e.target.dataset.userid;
  if (userId && e.target.classList.contains("delete")) {
    e.target.disabled = true;
    deleteUser(userId)
      .then(() => {
        getUsers().then((users) => renderUsers(users));
      })
      .catch(showError);
  }
});

document.querySelector(".clear-all").addEventListener("click", () => {
  deleteAllUsers()
    .then(() => renderUsers([]))
    .catch(showError);
});

document
  .querySelector(".update-all")
  .addEventListener("click", createInitialUsers);

const newUserInput = document.querySelector(".create-user input");
const newUserButton = document.querySelector(".create-user button");

newUserButton.addEventListener("click", () => {
  if (newUserInput.value) {
    createUser({
      name: newUserInput.value,
      age: Math.round(Math.random() * 40),
    })
      .then(() => {
        newUserInput.value = "";
        getUsers().then((users) => renderUsers(users));
      })
      .catch(showError);
  }
});

window.onload = createInitialUsers;
