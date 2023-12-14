export default function loadEvents() {
    console.log('This is the events module!')

    const events = document.createElement('div');
    events.classList.add('events');

    //events container div
    const eventsContainer = document.createElement('div');
    eventsContainer.classList.add('events-container');




    return events;
};