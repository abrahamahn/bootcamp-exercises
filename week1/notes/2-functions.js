// DRY Don't repeat yourself

/*function <name> (<parameteres>) {
    <instructions>

    [return statement]
}*/

// Function declaration
function sayHelloMary() {
    console.log('Hello Mary!');
};

function sayHelloJohn() {
    console.log('Hello John!');
};

// Function expression
let sayHelloTwo = function() {
    console.log('Hello there!, again');
}

// Function Invokation
//sayHello();
//sayHelloTwo();

function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHelloMary();
sayHelloJohn();
sayHello('Jake');

function sayHelloToClassmates(classmate1, classmate2, classmate3) {
    console.log(`Hello ${classmate1}, ${classmate2}, ${classmate3}`);
}

sayHelloToClassmates('Jake', 'Joana', 'Francisco');

function multiplyByTwo(number) {
    return number * 2;
}

let result = multiplyByTwo(4);

console.log(result);

// anything that is written after return line aren't executed. So the return
// statement always has to be the last thing to be written.

//1. Create a function that accepts 3 numbers as parameters and returns their
//   sum

function sum(number1, number2, number3) {
    return console.log(number1 + number2 + number3);
}

// with console.log statement
sum(3, 6, 9);

// without console.log statement
function sumParams(number1, number2, number3) {
    return number1 + number2 + number3;
}

let sumResult = sumParams(1, 2, 3);
console.log(sumResult);

// function that calculates the avarage of an array
function avg(array) {
    // initialize sum variable to zero
    let sum = 0;

    // iterates through every element of the array
    for (let i = 0; i < array.length; i++) {
        //sums array value to sum variable
        sum = sum + array[i];
    }

    // returns total sum divided by the array's length
    return sum / array.length;
}

// call the avg function and console.log the result
let array = [306, 204, 1203, 962];
let avgResult = avg(array);
console.log(avgResult);
console.log(avg(array));

// function that calculates the sum of an array
function sum(array) {
    // initialize sum variable to zero
    let sum = 0;

    // iterates through every element of the array
    for (let i = 0; i < array.length; i++) {
        //sums array value to sum variable
        sum = sum + array[i];
    }
    return sum;
}

// function that calculates the average of an array
function average(array) {
    return sum(array) / array.length;
}

average([1, 2, 3, 4]);

// each function has purposes and divide functions by each purposes. have small
// functions 

function average(array) {
    // check if the array's length is more than 0
    // if it's not, I just want to return a message
    if (array.length === 0) {
        return `The array is empty`;
    }
    return sum(array) / array.length;
}

result = average([1, 2, 3, 4]);
console.log(result);

// each function has purposes and divide functions by each purposes. have small
// functions as much as possible.