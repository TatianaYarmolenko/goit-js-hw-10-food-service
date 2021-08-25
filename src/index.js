// const user= {
//    name: 'Mango',
//    age: 2,
// };
 
// console.log(JSON.stringify(user));

// const saveUserData = '{"name":"Mango","age":2}';

// console.log(JSON.parse(saveUserData));

// console.log(localStorage);

// localStorage.setItem('my-data', JSON.stringify({ name: "Mango", age: 2 }));

// const savedData = localStorage.getItem('my-data');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);

import './css/common.css';
import './css/feedback-form.css';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

// populateMessage();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);


function onTextareaInput(evt) {
   const value = evt.currentTarget.value;

   console.log(value);
}

function onFormSubmit(evt) {
   evt.preventDefault();
 
   console.log('Отправляем форму');
   // localStorage.removeItem('feedback-message');
   evt.currentTarget.reset();
 }
 