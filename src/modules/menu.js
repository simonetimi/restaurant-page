export default function loadMenu() {
    console.log('This is the menu module!');
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //div
    const menuList = document.createElement('div');
    menuList.classList.add('menu-list');


    return menu;
};