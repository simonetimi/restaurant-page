export default function loadMenu() {
    console.log('This is the menu module!');
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //menu container div
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    //menu title
    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'Menu';
    menuContainer.appendChild(menuTitle);

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');
    menuContainer.appendChild(menuItemsContainer);

    //menu items
    (() => {
        for (let i = 0; i < 10; i++) {
            const menuItem = document.createElement('div');
            menuItem.setAttribute('id', 'menu-item-' + i)
            menuItemsContainer.appendChild(menuItem);
            const menuItemTitle = document.createElement('h3');
            menuItem.appendChild(menuItemTitle);
            const menuItemPara = document.createElement('p');
            menuItem.appendChild(menuItemPara);
        };
    })();

    //DOM doesn't load fast enough without this function (to fix)
    setTimeout(function () {
        document.querySelector('#menu-item-0 h3').textContent = 'Tacos Carnita / $8';
        document.querySelector('#menu-item-0 p').textContent = 'Braised pork, queso añejo, guacamole, onions, cilantro, salsa, jalapeño sauce, chicharron.';
        document.querySelector('#menu-item-1 h3').textContent = 'Tacos Chicken / $7';
        document.querySelector('#menu-item-1 p').textContent = 'Grilled chicken, jalapeño sauce, questo añejo, green cabbage, salsa fresca, crispy shallots.'
        document.querySelector('#menu-item-2 h3').textContent = 'Tacos Fish / $7.5';
        document.querySelector('#menu-item-2 p').textContent = 'Cod, lime crema, pickled cabbage, chilantro, roasted onions, salsa, questo añejo, hot sauce.'
        document.querySelector('#menu-item-3 h3').textContent = 'Nachos fiesta / $9';
        document.querySelector('#menu-item-3 p').textContent = 'Ground beef or marinated chicken, refried beans, questo, jalapeños, lettuce, sour cream, guacamole.'
        document.querySelector('#menu-item-4 h3').textContent = 'Burrito Classic / $8';
        document.querySelector('#menu-item-4 p').textContent = 'Steak, pork or chicken, grilled onions, bell peppers, queso, lettuce, sour cream, black beans, guacamole, pico de gallo, mexican rice.'
        document.querySelector('#menu-item-5 h3').textContent = 'Burrito Especial / $9';
        document.querySelector('#menu-item-5 p').textContent = 'Chopped chicken, beef and shrimpt, secret salsa, lettuce, guacamole, mexican rice, black beans, hot japeños.'
        document.querySelector('#menu-item-6 h3').textContent = 'Enchilada Classic / $9';
        document.querySelector('#menu-item-6 p').textContent = 'Ground beef or marinated chicken, cheese, jalapeño, refried beans, lettuce, sour cream, guacamole, pico de gallo, salsa.'
        document.querySelector('#menu-item-7 h3').textContent = 'Enchilada Veggie / $8';
        document.querySelector('#menu-item-7 p').textContent = 'Corn tortilass, grilled cauliflower, broccoli, carrots, cheese, salsa verde, lettuce, tomatoes, guacamole, source cream, mexican rice.'
        document.querySelector('#menu-item-8 h3').textContent = 'House Margarita / $8';
        document.querySelector('#menu-item-8 p').textContent = 'House tequila and lime mix. Served frozen or on the rocks.'
        document.querySelector('#menu-item-9 h3').textContent = 'Texas Margarita / $10.5';
        document.querySelector('#menu-item-9 p').textContent = 'Jose Cuervo Gold Tequila and Gran Gala. Served frozen or on the rocks.'
    }, 0);

    //append to the div
    menu.appendChild(menuContainer);
    return menu;
};