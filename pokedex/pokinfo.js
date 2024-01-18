 const urlParams = new URLSearchParams(window.location.search);

 const id = urlParams.get('id');
 const name = urlParams.get('name');
 const type = urlParams.get('type');
 const color = urlParams.get('color'); 

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

 const pokemonInfoContainer = document.getElementById('pokemon-info-container');
 const infoHTML = `
   <h2>Pokemon Information</h2>
   <p>ID: ${id}</p>
   <p>Name: ${name}</p>
   <p>Type: ${type}</p>
   <div style="background-color: ${colors}; width: 100px; height: 100px;"></div> 
   `
 //  <img src="${pokemon?.sprites?.other?.dream_world?.front_default}" alt="${name}">  `
 ;
 pokemonInfoContainer.innerHTML = infoHTML;