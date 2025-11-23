//a way to extract values from arrays or objects into separate variables quickly, without writing repetitive code.
//when you destructure an array, JS knows the order of elements: It’s position-based.
//it is as if you're naming every element in the array
const colors = ["red", "green", "blue"];

// old way
const first = colors[0];
const second = colors[1];

// destructuring
const [primary, secondary, tertiary] = colors;
//const [primary, , tertiary] = colors;  -->this will log the first and third colors only
//const [primary, tertiary] = colors;    -->this will log the first and second colors only 

console.log(primary);   // this will log--> red
console.log(secondary); // this will log--> green
console.log(tertiary);  // this will log--> blue
/*********************************************************/

// object destructuring is a bit different from array destructuring; you must know the keys of the object.
//cuz when you destructure an object, JS looks for specific property names (keys): It’s key-based
const person = { name: "Ahmed", age: 28, city: "tokyo" };

// old way
let myName = person.name;
let myAge = person.age;

// destructuring
let { _name, age, city } = person;

console.log(_name); // Ahmed
console.log(age);  // 28
console.log(city); // tokyo

//you can rename your keys to avoid confusion
const { name: firstName, age: years } = person;
console.log(firstName); // Ahmed
console.log(years);     // 28

//you can assign a default value
const { country = "Egypt" } = person;
console.log(country); // Egypt
/*********************************************************/

const user = {
  username: "coder123",
  email: "coder123@example.com",
  _country: "Egypt",
  _age: 28
};

const {username : _user, email, _country , _age, _city = "unknown"} = user 
// each variable on the left is independent of the object’s property names. 
// we can rename them like (username --> _user) or give default values (_city = "unknown") without affecting the original object.
console.log(_user);
console.log(_country);
console.log(_city);

