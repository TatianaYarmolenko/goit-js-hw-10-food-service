const themeToggleRef = document.querySelector('[id="theme-switch-toggle"]');

const Theme = {
   LIGHT: 'light-theme',
   DARK: 'dark-theme',
 };

 export default theme;


 function createMenu(menuData) {
     return menuData.map(itemsTemplate).join('');
  }
  
  const body = document.querySelector('body');
  const toolbox = document.querySelector("#theme-switch-toggle");
  

 toolbox.addEventListener("change", (e) => {
   body.classList.toggle("dark-theme")
   console.log(localStorage.getItem("class"))
   if (localStorage.getItem("class")) {
       localStorage.removeItem("class")
   } else {
       localStorage.setItem("class", "dark-theme")
       toolbox.checked = true;
   }
});


