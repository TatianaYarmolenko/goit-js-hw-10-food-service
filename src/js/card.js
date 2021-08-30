import '../styles.css';
import menuData from '../menu.json';
import itemsTemplate from '../templates/template.hbs';

const galleryRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menuData);
galleryRef.insertAdjacentHTML('beforebegin', markup);


// function createMenu(menuData) {
//    return menuData.map(itemsTemplate).join('');
// }

// const body = document.querySelector('body');
// const toolbox = document.querySelector("#theme-switch-toggle");

// toolbox.addEventListener("change", (e) => {
//    body.classList.toggle("dark-theme")
//    console.log(localStorage.getItem("class"))
//    if (localStorage.getItem("class")) {
//        localStorage.removeItem("class")
//    } else {
//        localStorage.setItem("class", "dark-theme")
//        toolbox.checked = true;
//    }
// });