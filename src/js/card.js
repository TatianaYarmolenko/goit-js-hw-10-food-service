import menuData from '../menu.json';
import menuItemsTemplate from '../templates/template';

const menuRef = document.querySelector('.js-menu');

const menuItemsMarkup = menuItemsTemplate(menuData);

menuRef.innerHTML = menuItemsMarkup;