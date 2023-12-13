import logoImgSrc from '../images/logo.png';

export default function loadHome() {
  console.log('This is the home module!');
  const home = document.createElement('div');
  home.classList.add('home');

  //div
  const welcome = document.createElement('div');
  welcome.classList.add('welcome');
  //logo
  const logoImg = new Image();
  logoImg.src = logoImgSrc;
  logoImg.setAttribute('id', 'logo-img-white')
  welcome.appendChild(logoImg);
  //text
  const para1 = document.createElement('p');
  para1.textContent = 'Welcome to';
  const title = document.createElement('h1');
  title.textContent = 'Los Chicos';
  const para2 = document.createElement('p');
  para2.textContent = 'Restaurante Mexicano';
  welcome.appendChild(para1);
  welcome.appendChild(title);
  welcome.appendChild(para2);


  //append to the div
  home.appendChild(welcome);
  return home;
};


/* Add image
  import Background from '../images/home-bg.jpg';
// Create a new image element using the Image constructor
  const homeBackground = new Image();
  homeBackground.src = Background;
//Append image to the newly created div "element"
  element.appendChild(homeBackground);
  */