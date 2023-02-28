//

// THEORY
// 1. HTTP / HTTPS
// 2. REST API (method, options, path, body)
// 3. GET, POST, PUT, DELETE
// 4. Headers
// 5. Paths
// 6. Codes (1**, 2**, 3**, 4**, 5**)
// 7. fetch (https://jsonplaceholder.typicode.com)
// 8. parameters, URLSearchParams
// 9. CORS

// fetch("https://jsonplaceholder.typicode.com/poswdwts")
//   .then((response) => {
//     if (!response.ok) {
//       return Promise.reject("ERROR");
//     }
//     return response.json();
//   })
//   .then((data) => {})
//   .catch((e) => {
//     console.log(e);
//   });

// class CreateRESTAPIRequest {
//   method; // 'GET' | 'POST' | 'PUT'  | 'PATCH' | 'DELETE'
//   headers; // { 'content-type': 'image/png' }
//   path; // 'http://' | 'https://'
//   body; // 'http://' | 'https://'

//   constructor({ method = "GET", headers, path, body }) {
//     this.method = method;
//     this.headers = headers;
//     this.path = path;
//     this.body = body;
//   }
// }

// const request = new CreateRESTAPIRequest({
//   method: "POST",
//   headers: {},
//   path: "https://apis.kahoot.it/broadcasts/067addc7-1231-4606-95ba-fd6d616af4e9?start=0&limit=100",
//   body: {
//     name: "Oleh",
//     age: 22,
//     position: "teacher",
//   },
// });

// Модуль 10 - Заняття 19 - HTTP-запити
// 1. The Pokedex API (fetch)
// Написати функцію для стягнення картинок покемонів та їхніх даних.
// Відображати їх за допомогою JS.

const BASE_URL = "https://pokeapi.co/api/v2/";
const GET_POKEMONS_URL = `${BASE_URL}pokemon`;

class Api {
  static #request(url, options) {
    return fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("ERROR");
        }
        return res.json();
      })
      .catch((e) => {
        if (e.message) alert(e.message);
      });
  }

  static get(url) {
    return Api.#request(url);
  }

  static post(url, options) {
    return Api.#request(url, { ...options, method: "POST" });
  }
}

const createPokemon = (option) => {
  const pokemon = document.createElement("div");
  pokemon.classList = "pokemon";

  const img = document.createElement("img");
  img.src = option.sprites.front_default;
  img.alt = `${option.name} Pokemon Image`;

  const pokemonName = document.createElement("h3");
  pokemonName.textContent = option.name;

  pokemon.append(img, pokemonName);

  return pokemon;
};

const pokemonList = document.querySelector(".pokemon-list");
Api.get(GET_POKEMONS_URL).then((data) => {
  Promise.all(data.results.map(({ url }) => Api.get(url))).then((res) => {
    pokemonList.append(...res.map(createPokemon));
  });
});

// REPETA STYLE

// const request = (url, options) =>
//   fetch(url, options)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("ERROR");
//       }
//       return res.json();
//     })
//     .catch((e) => {
//       if (e.message) alert(e.message);
//     });

// const get = (url) => request(url);

// const post = (url, options) => request(url, { ...options, method: "POST" });
