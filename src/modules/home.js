

export default function loadHome() {
    console.log('This is the first module!');
    const element = document.createElement('div');

    element.classList.add('home');

    return element;
  };


/* Add image
  import Background from '../images/home-bg.jpg';
// Create a new image element using the Image constructor
  const homeBackground = new Image();
  homeBackground.src = Background;
//Append image to the newly created div "element"
  element.appendChild(homeBackground);
  */