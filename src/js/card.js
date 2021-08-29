import '../styles.css';
import menu from '../menu.json';
import cardsTpl from '../templates/template.hbs';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);
galleryRef.insertAdjacentHTML('beforebegin', markup);


function itemsTemplate(menu) {
   return menu.map(cardsTpl).join('');
}

const body = document.querySelector('body');