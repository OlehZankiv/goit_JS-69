//

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

  static get(url) {
    return Api.#request(url);
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
