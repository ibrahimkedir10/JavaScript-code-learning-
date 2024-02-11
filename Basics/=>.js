/* The => syntax is known as an arrow function expression in JavaScript. It provides a concise way to write anonymous functions. Here's the syntax and some examples:

Syntax:
javascript
Copy code
// Single parameter and single expression
const functionName = parameter => expression;

// Multiple parameters and single expression
const functionName = (param1, param2) => expression;

// Single parameter and multiple statements
const functionName = parameter => {
  // statements
  return result;
};

// No parameters
const functionName = () => expression;
Examples:
Single parameter and single expression:

javascript
Copy code
const square = x => x * x;
console.log(square(5)); // Output: 25
Multiple parameters and single expression:

javascript
Copy code
const add = (a, b) => a + b;
console.log(add(3, 7)); // Output: 10
Single parameter and multiple statements:

javascript
Copy code
const greet = name => {
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
  return greeting;
};

greet('John'); // Output: Hello, John!
No parameters:

javascript
Copy code
const getRandomNumber = () => Math.random();
console.log(getRandomNumber()); // Output: a random number between 0 and 1
Arrow functions are especially handy for short and concise functions. They automatically bind the this value, making them useful for certain scenarios, such as when working with callbacks and event handlers

*/