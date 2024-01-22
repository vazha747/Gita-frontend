const poke_container = document.getElementById('poke-container');
const arenaContainer = document.getElementById('arena-container');
const urlParams = new URLSearchParams(window.location.search);
const chosenPokemonIds = urlParams.getAll('id');
const pokemon_count = 5;

const colors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

const main_types = Object.keys(colors);

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    const randomID = Math.floor(Math.random() * 898) + 1;
    await getPokemon(randomID);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const id = pokemon.id.toString().padStart(3, '0');
  const name = pokemon.name;

  const poke_type = pokemon.types.map(type => type.type.name);
  const type = poke_type[0]; 
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHtml = `
    <span class="number">#${id}</span>
    <div class="info">
      <h3 class="name">${name}</h3>
      <small class="type">type : ${type}</small>
    </div>
    <div class="img_container">
      <img src="${pokemon?.sprites?.other?.dream_world?.front_default}" alt="${name}">
    </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHtml;
  poke_container?.appendChild(pokemonEl);
};

const fetchChosenPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayChosenPokemon(data);
};

const displayChosenPokemon = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const id = pokemon.id.toString().padStart(3, '0');
  const name = pokemon.name;

  const poke_type = pokemon.types.map(type => type.type.name);
  const type = poke_type[0];
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHtml = `
    <span class="number">#${id}</span>
    <div class="info">
      <h3 class="name">${name}</h3>
      <small class="type">Type: ${type}</small>
    </div>
    <div class="img_container">
      <img src="${pokemon?.sprites?.other?.dream_world?.front_default}" alt="${name}">
    </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHtml;
  arenaContainer?.appendChild(pokemonEl);
};

const calculateTotalExperience = (pokemonList) => {
  return pokemonList.reduce((total, pokemon) => total + pokemon.base_experience, 0);
};

const comparePokemons = () => {
  const randomPokemonIds = Array.from({ length: pokemon_count }, () => Math.floor(Math.random() * 898) + 1);

  const chosenPokemonExperience = calculateTotalExperience(chosenPokemonList);
  const randomPokemonExperience = calculateTotalExperience(randomPokemonIds);

  if (chosenPokemonExperience > randomPokemonExperience) {
    alert('Congratulations! You win!');
  } else {
    alert('Sorry, you lost!');
  }
};

chosenPokemonIds.forEach((id) => {
  fetchChosenPokemon(id);
});

fetchPokemon();

const compareButton = document.createElement('button');
compareButton.textContent = 'Compare Pokémon';
compareButton.addEventListener('click', () => comparePokemons());
document.body.appendChild(compareButton);