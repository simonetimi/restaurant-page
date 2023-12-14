import mapImgSrc from '../images/map.png';

export default function loadContact() {
    console.log('This is the contact module!')

    const contact = document.createElement('div');
    contact.classList.add('contact');

    //contact container div
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    //contact map
    const mapImg = new Image();
    mapImg.src = mapImgSrc;
    mapImg.setAttribute('id', 'map')

    const contactTitle = document.createElement('h2');
    contactContainer.appendChild(contactTitle);
    const contactFindUs = document.createElement('p');
    contactContainer.appendChild(contactFindUs);
    const contactFindUs2 = document.createElement('p');
    contactContainer.appendChild(contactFindUs2);
    //append img
    contactContainer.appendChild(mapImg);
    const credits = document.createElement('div');
    contactContainer.appendChild(credits);
    const creditsPara1 = document.createElement('p');
    credits.appendChild(creditsPara1);
    const creditsPara2 = document.createElement('p');
    credits.appendChild(creditsPara2);
    const creditsPara3 = document.createElement('p');
    credits.appendChild(creditsPara3);
    const creditsPara4 = document.createElement('p');
    credits.appendChild(creditsPara4);

    contactTitle.textContent = `You can find us at`;
    contactFindUs.textContent = `1234 Aurora Borealis Drive`;
    contactFindUs2.textContent = `Juneau, Alaska 99801`;
    creditsPara1.innerHTML = `Home background: Picture of <a href="https://unsplash.com/@katlyngiberson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Katlyn Giberson</a> on Unsplash.`;
    creditsPara2.innerHTML = `Story background: Picture of <a href="https://unsplash.com/it/@seanbenesh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sean Benesh</a> on Unsplash.`;
    creditsPara3.innerHTML = `Events background: © FG Trade Latin / Getty Images`;
    creditsPara4.innerHTML = `Picture of <a href="https://unsplash.com/it/@gadiellv?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gadiel Lazcano</a> on Unsplash.`;

    contact.appendChild(contactContainer);
    return contact;
};
