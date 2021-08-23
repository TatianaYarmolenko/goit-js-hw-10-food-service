const user= {
   name: 'Mango',
   age: 2,
};
 
console.log(JSON.stringify(user));

const saveUserData = '{'name':'Mango','age':2}';

console.log(JSON.parse(saveUserData));