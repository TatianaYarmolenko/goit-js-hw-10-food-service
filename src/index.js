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

import throttle from 'lodash.throttle';
import './css/common.css';
import './css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

// populateMessage();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

function onFormSubmit(evt) {
   evt.preventDefault();
 
   console.log('Отправляем форму');
   localStorage.removeItem(STORAGE_KEY);
   evt.currentTarget.reset();
 }

 function onTextareaInput(evt) {
  const value = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

 function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
 