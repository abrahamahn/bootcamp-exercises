//ES 5
/* const greeting = function(name) {
    return `Hello ${name}`;
} */

//ES 6
// Arrow function syntax
const greeting = name => `Hello ${name}`;
const helloWorld = () => `Hello World`;

// With curly braces, you need return. Without curly braces, you don't need return.

let result = greeting(`Ironhacker`);
let result2 = helloWorld();

/* const user = {
    name: `ana`,
    age: 29,
    getOlder: function() {
        setTimeOut(() => {
            console.log(this.name);
        }, 1000)
    }
*/

const user = {
    name: `ana`
}

const user2 = {
    name: `sue`
}

function getAge() {
    console.log(this.age);
}

function getName() {
    console.log(this.name);
}

user.age = 20;
user2.age = 29;
user.getAge = getAge;
user2.getAge = getAge;
user.getName = getName;
user2.getName = getName;

user.getAge();
user2.getAge();
//1. create getName function and assign to both user and user2 objects
//2. print each object's name
user.getName();
user2.getName();