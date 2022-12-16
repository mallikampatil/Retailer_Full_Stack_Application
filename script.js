const APILINK = "https://api.redcircleapi.com/request?api_key=E18D50B218ED4CCA9005872A16A0E58F&search_term=all+products&type=search&sort_by=best_seller";
//const IMG_PATH = "https://api.redcircleapi.com/request?api_key=E18D50B218ED4CCA9005872A16A0E58F&search_term=all+products&type=search&sort_by=best_seller";
const SEARCHAPI = "https://api.redcircleapi.com/request?api_key=E18D50B218ED4CCA9005872A16A0E58F&search_term=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("retail-search");

returnItems(APILINK)
function returnItems(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            console.log(data.search_results);
            data.search_results.forEach(element => {
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

                title.innerHTML = `${element.product.title}`;
                // TODO: Update functionality with images
                image.src = `${element.product.images[0]}`;

                center.appendChild(image);
                div_card.appendChild(center);
                div_card.appendChild(title);
                div_column.appendChild(div_card);
                div_row.appendChild(div_column);
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