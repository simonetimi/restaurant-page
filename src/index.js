import './index.css';
import loadHome from './modules/home';
import loadSidebar from './modules/sidebar';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

//Append to the document body
document.body.appendChild(loadSidebar());
document.body.appendChild(loadHome());