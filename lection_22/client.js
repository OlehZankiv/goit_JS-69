//
//

// const getInfo = () => {
//   new Promise((res) => {
//     setTimeout(() => res("HELLO"), 1000);
//   }).then((user) =>
//     new Promise((res) => {
//       setTimeout(() => res("WORLD"), 1000);
//     }).then((posts) => {
//       console.log("HELLO WORLD");
//     })
//   );
// };

// const getAsyncInfo = async () => {
//   user = await new Promise((res, rej) => setTimeout(() => rej("ERROR"), 1000));

//   console.log(user);

//   // 1 sec stop

//   const posts = await new Promise((res) => setTimeout(() => res([]), 1000));

//   console.log(posts);

//   // 1 sec stop

//   const comments = await Promise.all([
//     new Promise((res) => res("")),
//     new Promise((res) => res("")),
//   ]);

//   console.log(comments);
// };

// const getUsers = async () => {
//   return Promise.resolve("wdwd");
// };

// getUsers().then((res) => {
//   console.log(res);
// });

// const getUserInfo = async () => {
//   const user = await Promise.resolve({ name: "USER" });

//   Promise.resolve([]).then((posts) => {
//     // DRAW POSTS
//   });

//   Promise.resolve([]).then((friends) => {
//     // DRAW FRIENDS
//   });

//   return user;
// };

// getUser().then((user) => {
//   // DRAW USER
// });

// const foo = async () => {
//   Promise.reject("ERROR");

//   return "OK";
// };

// foo()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// =>
// Модуль 11 - Заняття 21 - CRUD
// 1. async/await
// Переписати код нижче на async / await;

const server = new UsersServer();

// CRUD
const createUser = (user) =>
  server
    .fetch(UsersServer.USERS_URL, { method: "POST", body: stringify(user) })
    .then((user) => json(user))
    .catch(showError);

const getUsers = () =>
  server
    .fetch(UsersServer.USERS_URL)
    .then((users) => json(users))
    .catch(showError);

const updateUser = (user) =>
  server
    .fetch(UsersServer.USERS_URL, { method: "PUT", body: stringify(user) })
    .then((user) => json(user))
    .catch(showError);

const deleteUser = (id) =>
  server
    .fetch(UsersServer.USERS_URL + id, { method: "DELETE" })
    .then((user) => json(user))
    .catch(showError);

// HELPERS

const rerenderUsers = async () => renderUsers(await getUsers());

const deleteAllUsers = async () => {
  return Promise.all((await getUsers()).map((user) => deleteUser(user.id)));
};

const showError = (e) => console.log(e);

// MAIN LOGIC

const createInitialUsers = async () => {
  try {
    await Promise.all([
      createUser({ name: "Oleh", age: 22 }),
      createUser({ name: "Ivan", age: 21 }),
      createUser({ name: "Anna", age: 24 }),
      createUser({ name: "Svitlana", age: 18 }),
      createUser({ name: "Dmytro", age: 26 }),
      createUser({ name: "Sophia", age: 32 }),
    ]);
  } catch (e) {
    showError(e);
  } finally {
    rerenderUsers();
  }
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
          <input value=${user.name} data-userId=${user.id} class="name-input"/>
          <div class="user-age">${user.age}</div>
        </div>
        <button data-userId=${user.id} class="delete">DELETE</button>
      </div>
  `,
    ""
  );
};

usersList.addEventListener("click", async (e) => {
  const userId = e.target.dataset.userid;
  if (!userId || !e.target.classList.contains("delete")) return;

  e.target.disabled = true;

  try {
    await deleteUser(userId);
    rerenderUsers();
  } catch (e) {
    showError(e);
  }
});

usersList.addEventListener("input", async (e) => {
  const userId = e.target.dataset.userid;
  if (!userId || !e.target.classList.contains("name-input")) return;

  e.target.disabled = true;

  try {
    const users = await getUsers();
    const user = users.find(({ id }) => id === userId);
    await updateUser({ ...user, name: e.target.value });
    e.target.disabled = false;
  } catch (e) {
    showError(e);
  }
});

document.querySelector(".clear-all").addEventListener("click", async () => {
  try {
    await deleteAllUsers();
    rerenderUsers();
  } catch (e) {
    showError(e);
  }
});

document
  .querySelector(".update-all")
  .addEventListener("click", createInitialUsers);

const newUserNameInput = document.querySelector(".create-user .name");
const newUserAgeInput = document.querySelector(".create-user .age");
const newUserButton = document.querySelector(".create-user button");

newUserButton.addEventListener("click", async () => {
  if (!newUserNameInput.value) return;

  try {
    await createUser({
      name: newUserNameInput.value,
      age: Math.round(+newUserAgeInput.value || 0),
    });

    await rerenderUsers();
    newUserNameInput.value = "";
    newUserAgeInput.value = "";
  } catch (e) {
    showError(e);
  }
});

window.onload = createInitialUsers;
