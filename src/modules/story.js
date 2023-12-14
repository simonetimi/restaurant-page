export default function loadStory() {
    console.log('This is the story module!')

    const story = document.createElement('div');
    story.classList.add('story');

    //story container div
    const storyContainer = document.createElement('div');
    storyContainer.classList.add('story-container');

    //Create title and paragraph
    const storyTitle = document.createElement('h2');
    storyContainer.appendChild(storyTitle);
    const storyPara1 = document.createElement('p');
    storyContainer.appendChild(storyPara1);
    const storyPara2 = document.createElement('p');
    storyContainer.appendChild(storyPara2);
    const storyPara3 = document.createElement('p');
    storyContainer.appendChild(storyPara3);
    const storyEnd = document.createElement('h3');
    storyContainer.appendChild(storyEnd);

    storyTitle.textContent = 'Welcome to Los Chicos: A Taste of Authentic Mexico';
    storyPara1.textContent = `Nestled in the heart of a bustling metropolis, Los Chicos is the realization of a lifelong dream of two childhood friends, Miguel and Carlos. Inspired by their cherished memories of Mexico's rich traditions and flavors, they embarked on a mission to bring a slice of their homeland to the city. At Los Chicos, our ethos goes beyond serving Mexican cuisine; we aim to immerse our guests in an authentic Mexican experience, reminiscent of the vibrant life in Mexico's streets, markets, and festive gatherings.
    As you walk through ourdoors, you're greeted by an ambiance that's a fusion of traditional and contemporary Mexico. The walls, adorned with vivid, hand-painted murals, depict scenes of Mexican folklore and landscapes, creating a visual feast that complements the culinary one. Rustic wooden furniture, colorful textiles, and warm, ambient lighting set the stage for an unforgettable dining experience, while the air resonates with the melodious tunes of mariachi and contemporary Mexican music.`;
    storyPara2.textContent = `Our culinary journey is as diverse as Mexico itself.Our chefs, hailing from different regions of Mexico, bring their unique recipes and techniques to the table.The menu is a testament to this diversity, featuring everything from the robust, earthy flavors of Northern Mexico to the fresh, zesty notes of the coastal cuisine.Signature dishes like our 'Mole Poblano de Los Chicos' are made with a secret blend of spices and chocolate, offering a complex and soulful taste that's both traditional and innovative. Our tacos, a staple of Mexican street food, are transformed into a gourmet experience with fillings like slow-cooked barbacoa, zesty lime shrimp, and vegetarian options full of vibrant, fresh produce.`;
    storyPara3.textContent = `But Los Chicos is more than just a restaurant; it’s a vibrant community hub.We're proud to host a variety of events, from local music nights featuring up-and-coming artists to cooking workshops where you can learn the art of Mexican cuisine. We celebrate cultural festivals, adding a dash of Mexican festivity to the city's calendar.
    We're also committed to sustainability and community support. By sourcing ingredients from local farms and markets, we ensure that our food not only tastes good but also does good. Every dish served is a testament to our dedication to freshness, quality, and community support.
    Come, join us at Los Chicos for a meal, a drink, or a celebration.Indulge in flavors that transport you to the heart of Mexico, in an atmosphere that’s both welcoming and exhilarating. Whether it’s a family dinner, a night out with friends, or a quick lunch break, we promise an experience that’s vibrant, delicious, and authentically Mexican.`;
    storyEnd.textContent = `Bienvenidos a Los Chicos - where every meal is a celebration of Mexican culture and hospitality!`;

    story.appendChild(storyContainer);
    return story;
};