//
//

const json = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (e) {
    // console.error(e);
  }
};

const stringify = (data) => {
  try {
    return JSON.stringify(data);
  } catch (e) {
    // console.error(e);
  }
};

const callWithRandomDelay = (callback) => {
  setTimeout(callback, Math.random() * 1 * 1000);
};

class UsersServer {
  static #USERS_KEY = "USERS";
  static #_404_RESPONSE = { ok: false, status: 404 };
  static #BASE_URL = "https://custom-server.com/api/v1/";
  static USERS_URL = `${UsersServer.#BASE_URL}users/`;

  get #users() {
    return json(localStorage.getItem(UsersServer.#USERS_KEY)) || [];
  }

  set #users(data) {
    localStorage.setItem(UsersServer.#USERS_KEY, stringify(data));
  }

  #generateId() {
    const S4 = () =>
      (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

    return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  }

  #createUser(newUser) {
    if (!newUser)
      return Promise.reject(
        stringify({
          message: "We can't find you body",
        })
      );
    if (!newUser.name || !newUser.age)
      return Promise.reject(
        stringify({
          message: "User is incorrect",
        })
      );
    if (
      this.#users.some(
        (user) => user.name.toLowerCase() === newUser.name.toLowerCase()
      )
    ) {
      return Promise.reject(
        stringify({
          message: "This name of User is already exist",
        })
      );
    }

    return new Promise((res) => {
      callWithRandomDelay(() => {
        const createdUser = { ...newUser, id: this.#generateId() };
        this.#users = [...this.#users, createdUser];

        res(stringify(createdUser));
      });
    });
  }

  #updateUser(newUser) {
    if (!newUser)
      return Promise.reject(
        stringify({
          message: "We can't find you body",
        })
      );
    if (!newUser.name || !newUser.age)
      return Promise.reject(
        stringify({
          message: "User is incorrect",
        })
      );

    const allUsers = [...this.#users];
    const indexToUpdate = allUsers.findIndex((user) => user.id === newUser.id);

    if (indexToUpdate === -1) {
      return Promise.reject(
        stringify({
          message: "This User doesn't exist",
        })
      );
    }

    return new Promise((res) => {
      callWithRandomDelay(() => {
        const updatedUser = { ...allUsers[indexToUpdate], ...newUser };

        allUsers.splice(indexToUpdate, 1, updatedUser);

        this.#users = allUsers;

        res(stringify(updatedUser));
      });
    });
  }

  #deleteUser(url) {
    return new Promise((res) => {
      callWithRandomDelay(() => {
        const allUsers = [...this.#users];
        const indexToDelete = allUsers.findIndex((user) =>
          url.endsWith(user.id)
        );

        if (indexToDelete === -1)
          return Promise.reject(
            stringify({
              message: "This user doesn't exist",
            })
          );

        const deletedUser = allUsers.splice(indexToDelete, 1);
        this.#users = allUsers;
        res(stringify(deletedUser[0]));
      });
    });
  }

  fetch(url, options = { method: "GET" }) {
    switch (options.method) {
      case "GET":
        switch (url) {
          case UsersServer.USERS_URL:
            return new Promise((res) => {
              callWithRandomDelay(() => res(stringify(this.#users)));
            });

          default:
            return Promise.resolve(stringify(UsersServer.#_404_RESPONSE));
        }
      case "POST":
        switch (url) {
          case UsersServer.USERS_URL:
            if (typeof options.body !== "string")
              return Promise.reject(
                stringify({ message: "Body should be as string" })
              );

            return this.#createUser(json(options.body));
          default:
            return Promise.resolve(stringify(UsersServer.#_404_RESPONSE));
        }
      case "PUT":
        switch (url) {
          case UsersServer.USERS_URL:
            if (typeof options.body !== "string")
              return Promise.reject(
                stringify({ message: "Body should be as string" })
              );

            return this.#updateUser(json(options.body));
          default:
            return Promise.resolve(stringify(UsersServer.#_404_RESPONSE));
        }
      case "DELETE":
        return this.#deleteUser(url);
      default:
        return Promise.reject(`${options.method} is incorrect`);
    }
  }
}
