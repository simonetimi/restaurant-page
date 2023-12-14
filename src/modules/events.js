export default function loadEvents() {
    console.log('This is the events module!')

    const events = document.createElement('div');
    events.classList.add('events');

    //events container div
    const eventsContainer = document.createElement('div');
    eventsContainer.classList.add('events-container');
    events.appendChild(eventsContainer);

    //events title
    const eventsTitle = document.createElement('h2');
    eventsTitle.classList.add('events-title');
    eventsTitle.textContent = 'Events';
    eventsContainer.appendChild(eventsTitle);

    (() => {
        for (let i = 0; i < 4; i++) {
            const eventBox = document.createElement('div');
            eventBox.setAttribute('id', 'event-box-' + i)
            eventsContainer.appendChild(eventBox);
            const eventBoxTitle = document.createElement('h3');
            eventBox.appendChild(eventBoxTitle);
            const eventBoxPara = document.createElement('p');
            eventBox.appendChild(eventBoxPara);
        };

    })();

    setTimeout(function () {
        document.querySelector('#event-box-0 h3').textContent = `Fiesta de Sabores`;
        document.querySelector('#event-box-0 p').textContent = `Join us for a unique evening where the flavors of Mexico come to life! "Fiesta de Sabores" offers you a culinary journey through regional Mexican dishes, accompanied by live music and traditional dances. Discover the true spirit of Mexico!`;
        document.querySelector('#event-box-1 h3').textContent = `Night of Tacos and Tequila`
        document.querySelector('#event-box-1 p').textContent = `Get ready for a night dedicated to tacos and tequila! This event showcases a wide variety of gourmet tacos perfectly paired with premium tequila. A tasting experience that celebrates the rich culinary culture of Mexico, with a DJ spinning the best Latin beats.`;
        document.querySelector('#event-box-2 h3').textContent = `Dia de los Muertos Themed Dinner`;
        document.querySelector('#event-box-2 p').textContent = `Experience the magical atmosphere of Dia de los Muertos in a unique setting. Our themed dinner features a special menu inspired by the traditions of this Mexican holiday, with colorful decorations, folkloric music, and a mask parade. An event to remember and joyfully honor.`;
        document.querySelector('#event-box-3 h3').textContent = `Mexican Sunday Brunch`;
        document.querySelector('#event-box-3 p').textContent = `Enjoy a Sunday brunch with a Mexican twist. Our brunch offers a variety of antojitos, main courses, and Mexican desserts, accompanied by spicy mimosas and live mariachi music. It's the perfect way to relax and enjoy the weekend in Mexican style!`;
    }, 0);


    return events;
};