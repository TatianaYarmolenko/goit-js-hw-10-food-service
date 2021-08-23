// const user= {
//    name: 'Mango',
//    age: 2,
// };
 
// console.log(JSON.stringify(user));

// const saveUserData = '{"name":"Mango","age":2}';

// console.log(JSON.parse(saveUserData));

console.log(localStorage);

localStorage.setItem('my-data', JSON.stringify({ name: "Mango", age: 2 }));

const savedData = localStorage.getItem('my-data');
console.log('savedData', savedData);

const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData);