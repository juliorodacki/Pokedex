const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const input = document.querySelector('.input__search');
const form = document.querySelector('.form');

let searchPokemon = 1;

const buscarPokemon = async (pokemon) => {
    const dados = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await dados.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await buscarPokemon(pokemon)
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data.sprites.front_shiny
    input.value = '';
    searchPokemon = data.id;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value);
  });
  

renderPokemon(searchPokemon);