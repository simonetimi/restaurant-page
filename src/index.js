import './main.css';
import loadHome from './modules/home';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}


//Append to the document body
document.body.appendChild(loadHome());