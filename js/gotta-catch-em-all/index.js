/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  // clear previous pokemons
  pokemonsContainer.innerHTML = ""

  pokemons.forEach(pokemon => {
    // <div class="pokemon type1 ...">
    //  <h2>Name</h2>
    //  <img src="src"/>
    // </div >
    let card = document.createElement('div')
    card.classList.add('pokemon')
    pokemon.types.forEach(type => {
      card.classList.add(type)
    })

    let name = document.createElement('h2')
    name.innerText = pokemon.name

    let picture = document.createElement('img')
    picture.src = pokemon.image
    picture.alt = pokemon.name

    card.appendChild(name)
    card.appendChild(picture)
    pokemonsContainer.appendChild(card)
  });
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  let types = []
  let name = ""
  for (let n = 0; n < form.children.length; n++) {
    switch (form.children[n].children[0].type) {
      case "checkbox":
        if (form.children[n].children[0].checked) types.push(form.children[n].children[0].id);
        break;
      case "text":
        name = new RegExp(form.children[n].children[0].value.trim(), "i")
        break;
    }
  }
  // zwróć odfiltrowaną tablicę pokemonów
  return pokemons.filter((pokemon) => name.test(pokemon.name) && pokemon.types.every(type => types.includes(type)))
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
