import '../styles.css';
import menuData from '../menu.json';
import itemsTemplate from '../templates/template.hbs';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menuData);
galleryRef.insertAdjacentHTML('beforebegin', markup);


// function itemsTemplate(menuData) {
//    return menuData.map(cardsTpl).join('');
// }

// const body = document.querySelector('body');