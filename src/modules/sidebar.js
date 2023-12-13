import logoImgSrc from '../images/logo.png';

export default function loadSidebar() {
  console.log('This is the sidebar module!');
  const sidebar = document.createElement('aside');

  //logo
  const logoImg = new Image();
  logoImg.src = logoImgSrc;
  logoImg.setAttribute('id', 'logo-img')


  const sideList = ['Home', 'Menu', 'Story', 'Events', 'Contact'];
  function createList(list) {
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'side-list');
    let counter = 0;
    for (let item of list) {
      const li = document.createElement('li');
      li.textContent = item;
      li.setAttribute('id', 'list-item-'+ counter);
      ul.appendChild(li);
      counter++;
    }
    return ul;
  };
  const ul = createList(sideList);

  sidebar.appendChild(logoImg);
  sidebar.appendChild(ul);
  return sidebar
};



/* Add image
  import Background from '../images/home-bg.jpg';
// Create a new image element using the Image constructor
  const homeBackground = new Image();
  homeBackground.src = Background;
//Append image to the newly created div "element"
  element.appendChild(homeBackground);
  */