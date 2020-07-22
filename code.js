import films from './films.js';
import starships from './starships.js';

films.map(film =>{
    console.log(film.title, film.episode_id, film.opening_crawl, film.director, film.producer, 
        film.release_date)
});

//tests in the console
function green() {
    for (let i = 0; i < films.length; i++) {
        console.log(films[i]);
    }
}
green();
//test in the console
function blue() {
    for (let i = 0; i < starships.length; i++) {
        console.log(starships[i]);
    }
}
blue();

window.onload = allMovies();
function allMovies() {
    for (let i = 0; i < films.length; i++) {
        document.getElementById("movies").innerHTML = films.join(" * ");
        document.querySelector("p").innerHTML = films.join(" * ");
    }
}

window.onload = allStarships();
function allStarships() {
    for (let i = 0; i < starships.length; i++) {
        document.getElementById("starships").innerHTML = starships.join(" * ");
    }
}
