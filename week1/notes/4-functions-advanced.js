// function declaration - you can all it from anywhere on your code
helloWorld();
helloWorld2();
// function declaration - you can call it from anywhere on your code
function helloWorld() {
    console.log(`Hello World from function declaration`);
}

// function expression - you can only call it after this declaration
const helloWorld2 = function() {
    console.log(`Hello World from function expression`);
}

// Hoisting - Javascript feature that moves declarations to the top of the
// execution context

// function invokation