const poke_container = document.getElementById('poke-container');
const pokemon_count = 8;
let chosenPokemonCount = 0;
const chosenPokemons = [];

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
    <div class="img_container">
      <img src="${pokemon?.sprites?.other?.dream_world?.front_default}" alt="${name}">
    </div>
    <div class="info">
      <h3 class="name">${name}</h3>
      <small class="type">type : ${type}</small>
    </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHtml;
  poke_container?.appendChild(pokemonEl);

  pokemonEl.addEventListener('click', () => clicked(pokemon));
};

function chosenPokemon(pokemon) {
  const pokemonElement = document.createElement('div');
  pokemonElement.classList.add('pokemon');
  const id = pokemon.id.toString().padStart(3, '0');
  const name = pokemon.name;

  const poke_type = pokemon.types.map(type => type.type.name);
  const type = poke_type[0];
  const color = colors[type];

  pokemonElement.style.backgroundColor = color;

  const pokemonInnerHtml = `
    <span class="number">#${id}</span>
    <div class="img_container">
      <img src="${pokemon?.sprites?.other?.dream_world?.front_default}" alt="${name}">
    </div>
    <div class="info">
      <h3 class="name">${name}</h3>
      <small class="type">type : ${type}</small>
    </div>
  `;

  pokemonElement.innerHTML = pokemonInnerHtml;
  const chosenPokemonContainer = document.getElementById('chosen-pokemon');
  chosenPokemonContainer?.appendChild(pokemonElement);
}

function clicked(pokemon) {
  const userInput = prompt(`You clicked on ${pokemon.name}. Write 1 if you want information. Write 2 if you want to select your Pokémon.`);

  if (userInput === '1') {
    window.location.href = `pokeInfo.html?id=${pokemon.id}&name=${pokemon.name}&type=${pokemon.types.map(type => type.type.name).join(',')}&color=${colors[pokemon.types[0].type.name]}`;
  } else if (userInput === '2') {
    if (chosenPokemons.includes(pokemon.id)) {
      alert('You have already chosen this Pokémon.');
    } else {
      if (chosenPokemonCount < 5) {
        chosenPokemon(pokemon);
        chosenPokemonCount++;
        chosenPokemons.push(pokemon.id);
        localStorage.setItem('pokemon', JSON.stringify(chosenPokemons));
      } else {
        alert('You can only choose 5 Pokémon.');
      }
    }
  } else {
    alert('Invalid input. Please enter 1 or 2.');
  }
}

const goToArena = () => {
  if (chosenPokemonCount === 5) {
    const chosenPokemonsQuery = chosenPokemons.map(id => `id=${id}`).join('&');
    window.location.href = `arena.html?${chosenPokemonsQuery}`;
  } else {
    alert('You need to choose 5 Pokémon before going to the arena.');
  }
}

fetchPokemon();