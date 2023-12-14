import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadStory from "./story.js";
import loadEvents from "./events.js";
import loadContact from "./contact.js";

export default function loadButtons() {
    const main = document.querySelector('main');

    //select menu
    const listContainer = document.querySelector('#side-list');
    const list = listContainer.querySelectorAll('li');
    list.forEach((item) => {
        item.addEventListener('click', switchMain);
    });

    function switchMain(event) {
        main.innerHTML = '';
        const clickedItem = event.currentTarget.id;
        switch (clickedItem) {
            case 'list-item-0':
                main.appendChild(loadHome());
                break;
            case 'list-item-1':
                main.appendChild(loadMenu());
                break;
            case 'list-item-2':
                main.appendChild(loadStory());
                break;
            case 'list-item-3':
                main.appendChild(loadEvents());
                break;
            case 'list-item-4':
                main.appendChild(loadContact());
                break;

        }
    }

};
