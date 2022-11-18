let conditionOne = true;
let conditionTwo = false;

if (conditionOne === false) {
    console.log('control is false');
} else {
    console.log('control is true');
}

let goingOutTonight = true;

if (goingOutTonight === true) {
    console.log(`I'm happy`);
} else {
    console.log(`I'm sad`);
}

// Undefined
let myName; // <= variable declaration

console.log(myName);

if (myName === undefined) {
    console.log('that name is not defined yet');
} else {
    console.log(myName);
}

// Null
myName = "Miguel"; // <= variable assignment
console.log(myName);

myName = null;
console.log(myName);

if (true) {
    console.log('I fell into a true condition statement');
} else {
    console.log('I fell into a false condition statement');
}