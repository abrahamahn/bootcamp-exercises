// Scope, hoisting, shadowing

// Scope - Global, Function level, Block let)

let age = 39; // <- Global scope
let message = `Hello from the global scope`;

function sayHelloFromFunctionScope() {
    let greeting = `Hello from the local function scope`;
    return greeting;
}

let greeting = sayHelloFromFunctionScope();

console.log(message);
// console.log(greeting); // <= cannot access the function scope from the global scope

let outerVar = 1;

function inner() {
    let innerVar = 2;
    console.log(outerVar);
    function deeperInner() { // Lexical scope
        // another scope
        let deeperInnerVar = 3;
        console.log(innerVar);
    }
    // console.log(deeperInnerVar);
}
// I can always access my parent scope, but cannot get inside lexical scopes
// (function scope from the outside)
inner();

let outerVariable = `outer value`
function innerScope() {
    let innerVariable = `inner value`;
    console.log(outerVariable); // I can access the outer scope
}
// Don't have an access to the inner function.
// innerVariable + 3; // cannot access innervariable cause it's inside the function scope.

for (let i = 0; i < 5; i++) {
    console.log(`inside foroop ${i}`);
}
// console.log(`outside forloop ${i}`);
// var does not create block scope
var name = `miguel`; //var allows you to have several variables with the same name
var name = `salome`;

// let name = `miguel`; //let does not allow to have variables with the same name
// let name = `salome`;

//Hoisting
helloWorld();
function helloWorld() { //function declarations get moved to the top by the javascript interpreter
    console.log(`hello world`)
}

const thisIsAConst = `some content`;
// thisIsAConst = `should get an error`;

const obj = { name: `miguel` };
obj.name = `ana`;
obj = { };

// Shadowing 
let a = 1;
function inner() {
    let a = 3;
}