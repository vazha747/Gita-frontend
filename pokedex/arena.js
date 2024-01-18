 const urlParams = new URLSearchParams(window.location.search);

 const id = urlParams.get('id');
 const name = urlParams.get('name');
 const type = urlParams.get('type');
 const color = urlParams.get('color');

 const arenaContainer = document.getElementById('arena-container');
 const infoHTML = `
   <h2>${name} in the Arena</h2>
   <p>ID: ${id}</p>
   <p>Type: ${type}</p>
   <div style="background-color: ${color}; width: 100px; height: 100px;"></div> 
  `// <img src="${pokemon?.sprites?.other?.dream_world?.front_default}" alt="${name}"> `
 ;
 arenaContainer.innerHTML = infoHTML;