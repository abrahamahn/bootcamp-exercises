// create a variable with a number of your choice
// console log that variable

let myNumber = 34;
console.log(myNumber);

// create a variable of type String with some string value
// console log that variable's value

let mySlogan = 'Life is beautiful'
console.log (mySlogan);

console.log(3 * 3);
console.log(3 + 4);

let mySecondNumber = 43;

console.log(myNumber + mySecondNumber);
console.log(4 / 2);
console.log(7 / 2);
console.log(7 % 2);
console.log(myNumber / mySlogan);
let myStringNumber = '34';
console.log(9 % 2);
console.log(9 % 2 === 0);

// String interpolation
let firstName = 'Abe';
let lastName = 'Ahn';
let myAge = 39;

// console log firstName and lastName -> visible on the same line (use one
// console.log)
console.log(firstName + lastName);

// old fashioneded way of string interpolation
console.log(firstName + " " + lastName);

//new way of string interpolation
console.log(`${firstName} ${lastName}`);

// Hello "name" and my age is "your age"
console.log (`Hello Mr ${firstName} ${lastName} and my age is ${myAge}`);

//String functions we can use in javascript
console.log(firstName.length);
console.log(firstName.charAt(1));
console.log(firstName[0]);

const message = "Don't be sad, be happy";
console.log(message.indexOf('Don'));

// Write the code that finds the index of the letter 'j' in "My favorite dessert
// is jello""
console.log("My favorite dessert is jello".indexOf('j'));

// Substring
let withSubstring = message.substring(0, 3);
console.log(withSubstring);

// localeCompare
console.log('barcelona'.localeCompare('miami')); // -1 because miami comes after barcelona alphabetically.
console.log('miami'.localeCompare('barcelona'));

// startsWith
const anotherString = 'To be, or not to be, that is the question.';

console.log(anotherString.startsWith('To be'));
console.log(anotherString.startsWith('not to be'));
console.log(anotherString.startsWith('not to be', 10));

// includes
console.log(anotherString.includes('To be'));
console.log(anotherString.includes('not toooo be'));