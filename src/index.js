import './style.css';
import Icon from './icon.png';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }




function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.classList.add('hello');
 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;
 
   element.appendChild(myIcon);
 
    return element;
  }