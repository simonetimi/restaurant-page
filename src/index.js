import './index.css';
import loadSidebar from './modules/sidebar.js';
import loadHome from './modules/home.js';
import loadMenu from './modules/menu.js';
import loadButtons from './modules/buttons.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const main = document.createElement('main');
//Append initial load
document.body.appendChild(loadSidebar());
document.body.appendChild(main);
main.appendChild(loadHome());
loadButtons();
