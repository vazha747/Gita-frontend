const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const name = urlParams.get('name');
const type = urlParams.get('type');
const colors = urlParams.get('colors');
const img = urlParams.get('img');

const pokemonInfoContainer = document.getElementById('pokemon-info-container');
const body = document.body;

const infoHTML = `
  <h2>Pokemon Information</h2>
  <p>ID: ${id}</p>
  <p>Name: ${name}</p>
  <p>Type: ${type}</p>
  <style> body : ${colors}; 
  </style> 
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="${name}">
`;

pokemonInfoContainer.innerHTML = infoHTML;
body.style.backgroundColor = color;