import films from './films.js';

function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

const ul = document.querySelector('#movies');

films.map(film =>{
    console.log(film.title, film.episode_id, film.opening_crawl, film.director, film.producer, 
        film.release_date)
        let li = createNode('li'),
            title = createNode('title'),
            span = createNode('span');

        span.innerHTML = `Title: ${film.title}, Director: ${film.director}`; 
        append(li, title);
        append(li, span);
        append(ul, li);
});