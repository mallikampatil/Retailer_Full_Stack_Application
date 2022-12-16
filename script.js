const APILINK = 'https://api.redcircleapi.com/request?api_key=E18D50B218ED4CCA9005872A16A0E58F&search_term=highlighter+pens&category_id=5zja3&type=search';
const IMG_PATH = "https://api.redcircleapi.com/request?api_key=E18D50B218ED4CCA9005872A16A0E58F&search_term=";
const SEARCHAPI = "https://api.redcircleapi.com/request?api_key=E18D50B218ED4CCA9005872A16A0E58F&search_term=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("retail-search");

function returnItems(APILINK) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            console.log(data.results);
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card'); 

                const div_column = document.createElement('div');
                div_column.setAttribute('class', 'column'); 

                const div_row = document.createElement('div');
                div_row.setAttribute('class', 'row'); 

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail'); 

                const title = document.createElement('h3');

                const center = document.createElement('center');

                title.innerHTML = `${element.title}`;
                // TODO: Update functionality with images
                image.src = IMG_PATH + element.poster_path;

                center.appendChild(image);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_column.appenChild(card);

                main.appendChild(div_row);
            });
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnItems(SEARCHAPI + searchItem + "&type=search");
        search.value = " ";
    }
});