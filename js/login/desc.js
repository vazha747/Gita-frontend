const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById("main");
const places = document.getElementById("seat");

const data = localStorage.getItem("movieData");

const movie = JSON.parse(data);
getMovies(API_URL)

const mainOne = document.getElementById('mainOne')
const form = document.getElementById('form')
const search = document.getElementById('search')
const releatedMovies = document.getElementById('relatedMovies')
console.log(movie);

places.innerHTML = "";
main.innerHTML = "";

const seats = [
  {
    seat: "seat1",
    price: "25GEL",
  },
  {
    seat: "seat2",
    price: "25GEL",
  },
  {
    seat: "seat3",
    price: "25GEL",
  },
  {
    seat: "seat4",
    price: "25GEL",
  },
  {
    seat: "seat5",
    price: "25GEL",
  },
];

const movieEl = document.createElement("div")

movieEl.classList.add("single_movie_info")

movieEl.innerHTML = `
<div class="banner_img">
    <img src="${IMG_PATH + movie.backdrop_path}" alt="${movie.title}">
</div>
<div class="row">
    <div class="col-6">
    <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
    </div>
    <div class="col-6">
            <div class="single_movie_info">
                <h3>${movie.title}</h3>
                <p>
                    ${movie.vote_average}
                </p>
                <p>
                    ${movie.overview}
                </p>
                <p>
                ${movie.original_language}
                </p>
                <p>
                ${movie.release_date}
                </p>
            </div>
    </div>
</div>
`
main.appendChild(movieEl)

seats.forEach((seat)  => {
  const seatEl = document.createElement("div");
  seatEl.classList.add("seat_places");
  seatEl.innerHTML = `
        <button onclick="myFunction()"><h1>${seat.seat}</h1>
                <h2>${seat.price}</h2>
        </button>        
    `;
  places.appendChild(seatEl);

});




// ჩემი ჩამატებული კოდები
question = parseInt(question);
function myFunction() {
   let question = prompt('how many seats do yo want');
if (question >= 1 && question <= 5 ){
  let result = question * 25;
  alert("your orde will be " + result + "GEL");
  window.location.href = "payment.html"
} else {
  alert ('sorry we do not have more than 5 seats at the moment')
}
 
};


async function getMovies(url) {
  const res = await fetch(url)
  console.log(res)
  const data = await res.json()
  console.log(data)
  showMovies(data.results)
}

function showMovies(movies) {
  console.log(movies)

  mainOne.innerHTML = ""

  movies.forEach((movie) => {
      console.log(movie)
      const {title, poster_path, vote_average, overview} = movie

      const movieEl = document.createElement("div")
      movieEl.classList.add('movie')

      movieEl.innerHTML = `
      <div>
          <img  src="${IMG_PATH + poster_path}" alt="${title}">
      </div>   
      <style>
      div {
      width:  ;
      }
      </style> 
          `
     mainOne.appendChild(movieEl)
    


     movieEl.addEventListener("click", (e) => {
          localStorage.setItem("movieData", JSON.stringify(movie))
          window.location.href = "./movie.html"
     })
  })

}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm[0] !== " " ) {
      getMovies(SEARCH_API + searchTerm)

      search.value = ''
      
  } else {
      window.location.reload()
  } 

})




