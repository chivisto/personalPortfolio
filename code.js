//All API's I am pulling from
const character = new Request('https://rickandmortyapi.com/api/character/?page=1');
const location = new Request('https://rickandmortyapi.com/api/location/');
const episode = new Request('https://rickandmortyapi.com/api/episode/');

// Create the type of element you pass in the parameters
function createNode(element) {
  return document.createElement(element);
}

// Append the second parameter(element) to the first one
function append(parent, el) {
  return parent.appendChild(el);
}

//What is used to make chars show up in HTML
const ul = document.getElementById('characters');

//Using the Character API first page then display them
fetch(character)
  .then((resp) => resp.json())
  .then(function (data) {
    let characters = data.results;
    return characters.map(function (char) {
      let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
      img.src = char.image;
      span.innerHTML = `${char.name}`;

      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function (error) {
    console.log(error);
  });

//Button to make API pages show up
document.getElementById("nextPge").addEventListener('click', nextPage);

//Using the Character API all pages after 1st page then display them
let pageNumAdd = 2;
function nextPage() {
  if (pageNumAdd >= 2 && pageNumAdd <= 30) {
    fetch(`https://rickandmortyapi.com/api/character/?page= ${pageNumAdd}`)
      .then((resp) => resp.json())
      .then(function (data) {
        let characters = data.results;
        return characters.map(function (char) {
          let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
          img.src = char.image;
          span.innerHTML = `${char.name}` ;

          append(li, img);
          append(li, span);
          append(ul, li);
        })
      })
      .catch(function (error) {
        console.log(error);
      });
      pageNumAdd++;
  } else {
    alert('Whoops, thats all the characters.')
  }
  console.log(pageNumAdd);
}