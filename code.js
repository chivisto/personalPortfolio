//All API's I am pulling from
const character = new Request('https://rickandmortyapi.com/api/character/');
let location = new Request('https://rickandmortyapi.com/api/location/');
let episode = new Request('https://rickandmortyapi.com/api/episode/');

// Create the type of element you pass in the parameters
function createNode(element) {
    return document.createElement(element);
}

// Append the second parameter(element) to the first one
function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('characters');

//Using the Character API to get all Characters then display them
fetch(character)
.then((resp) => resp.json())
.then(function(data) {
  let characters = data.results;
  return characters.map(function(char) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    img.src = char.image;
    span.innerHTML = `${char.id} ${char.id}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
}); 

  

//Get all locations of Rick & Morty characters from API
fetch(location)
.then((resp) => resp.json())
.then(function(data) {
  let local = data.results;
  return local.map(function(where) {
    let li = createNode('li'),
        span = createNode('span');
    span.innerHTML = `${where.id} ${where.id}`;
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
}); 
  
//Get all episodes of Rick & Morty from API
  fetch(episode)
  .then(response => response.json())
  .then(data => console.log(data));
  



