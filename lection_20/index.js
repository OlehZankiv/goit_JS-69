//
//

// VISIT
// loginRequest / registerRequest -> response (token) -> every next request set token

// const login = () =>
//   Promise.resolve(
//     "Bearer aowidjaowidnpoawuhdiauwhdiauhwdiauwhdioawuhduwhdaiudhw"
//   );

// let apiToken;

// login().then((token) => {
//   apiToken = token;
// });

// fetch("https://", { headers: { Authorization: apiToken } });

// Модуль 10 - Заняття 20 - Пагінація
// 1. Pagination. Infinity Scroll;
// Нижче наведений код із попередньої лекції,
// з функцією для стягнення та відображення картинок покемонів.
// Задача полягає в добавлення нескінченного скролу з підтримкою пагінації.

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

  static get(url, params) {
    return Api.#request(
      url + (params ? `?${new URLSearchParams(params)}` : "")
    );
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

let isLoading = false;

const drawPokemonsCreator = () => {
  const limit = 20;
  let offset = 0;
  let count = null;

  return () => {
    if (count && offset >= count) return;

    isLoading = true;
    Api.get(GET_POKEMONS_URL, {
      offset,
      limit,
    }).then((data) => {
      if (count === null) count = data.count;

      Promise.all(data.results.map(({ url }) => Api.get(url)))
        .then((res) => {
          pokemonList.append(...res.map(createPokemon));
          offset += limit;
        })
        .finally(() => (isLoading = false));
    });
  };
};

const drawPokemons = drawPokemonsCreator();
drawPokemons();

pokemonList.addEventListener("scroll", () => {
  if (isLoading) return;

  const scrollOffset = 120;
  const scrollPosition = pokemonList.scrollHeight - pokemonList.scrollTop;

  if (scrollPosition - scrollOffset <= pokemonList.clientHeight) drawPokemons();
});
