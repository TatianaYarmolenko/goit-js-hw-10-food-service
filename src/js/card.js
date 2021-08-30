import '../styles.css';
import menuData from '../menu.json';
import itemsTemplate from '../templates/template.hbs';

const galleryRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menuData);
galleryRef.insertAdjacentHTML('beforebegin', markup);