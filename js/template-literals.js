//this is a new way to create strings that can include variables and expressions easily, using backticks ` instead of quotes.

//this is an easier way instead of using (+)
const _name = "Ahmed";
const age = 28;

// old way
console.log("Hello " + _name + ", you are " + age + " years old.");

// template literal way
console.log(`Hello ${_name}, you are ${age} years old.`);
/*********************************************************/
//it supports multi-line strings without \n
const message = `This is line 1
This is line 2
This is line 3`;

console.log(message);
/*********************************************************/
//you can add a whole expression inside it
const a = 5;
const b = 10;
console.log(`The sum of a and b is ${a + b}`); // 15
/*********************************************************/
const firstName = "radwa"
const favoriteColor = "green"
console.log(`Hi ${firstName}! Your favorite color is ${favoriteColor}, and it has ${favoriteColor.length} letters`);
