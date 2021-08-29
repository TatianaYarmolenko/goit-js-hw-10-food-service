// import "./js/localstorage.js"



console.log(localStorage);

localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

console.log(localStorage.getItem('my-data'));;