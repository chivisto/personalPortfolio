//All API's I am pulling from
let characters = new Request('https://rickandmortyapi.com/api/character/');
let location = new Request('https://rickandmortyapi.com/api/location/');
let episode = new Request('https://rickandmortyapi.com/api/episode/');


//Get all characters of Rick & Morty from API
fetch(characters)
  .then(response => response.json())
  .then(data => console.log(data));

//Get all locations of Rick & Morty characters from API
  fetch(location)
  .then(response => response.json())
  .then(data => console.log(data));
  
//Get all episodes of Rick & Morty from API
  fetch(episode)
  .then(response => response.json())
  .then(data => console.log(data));
  