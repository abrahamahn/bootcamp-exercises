/* const age = 16;

// Conditionals
if (age <= 16) {
    console.log(`You have a teenager discount`);
} else if (age >= 65) {
    console.log(`You have a senior citizen discount`);
} else {
    console.log(`Sorry, you don't have any discount`);
}

const numberOne = 4;
const numberTwo = 3;

if (numberOne === numberTwo) {
    console.log('The numbers are equal');
} else {
    if (numberOne > numberTwo) {
        console.log("number one is greater than number 2");
    } else {
        console.log("number one is smaller than number 2");
    }
}

// 1. Create a variable with an assigned value of a language, e.g. Spanish,
//    French or Portuguese
// 2. Have an conditional that depending on the language you will console log
// hello world in the chosen language
//    E.g. Spanish -> Hola, mundo!; French -> Bonjour, monde!; Portuguese, Ola,
//    mundo!
const language = "Spanish";

if (language === 'Spanish') {
    console.log (`Hola, mundo!`);
} else if (language === `French`) {
    console.log (`Bonjour, monde!`);
} else if (language === `Portuguese`) {
    console.log (`Ola, mundo!`);
}

// Switch statement
const character = "Khal Drogo";
let house = '';
switch (character) {
    case 'Khal Drogo':
        house = 'Dothraki household';
    break;
    case 'Daenerys':
        house = 'Targaryan';
    break;
    case 'Jon Snow':
    case 'Arya':
    case 'Sansa':
        house = 'Stark house';
    break;
    default:
        house = 'I have no idea';
}

console.log(`Your character belongs to house ${house}`);
*/

// Loops

// While statement

/* let iterator = 0;

while (iterator <= 30) {

    if (iterator === 10) {
        console.log('ten');
    } else if (iterator === 20) {
        console.log('twenty');
    } else {
        console.log(iterator);
    }
    ///iterator = iterator + 1;
    iterator++;
} */

// do while

// for

/* for (let iterataor = 0; iterator <= 30; iterator++) {
    console.log(iterator);
} */

// write "ten" when iterator is 10, write "twenty" when iterator is 20

/* for (let iterator = 0; iterator <= 30; iterator++) {
    switch (iterator) {
        case 10:
            console.log(`ten`);
            break;
        case 20:
            console.log(`twenty`);
            break;
        default:
            console.log(iterator);
    }
}
*/

// write "even" or "odd" depending if the number is even or odd - hint you need
// to use the % operator

for (let iterator = 0; iterator <= 30; iterator++) {
    if (iterator % 2 === 0) {
        console.log (`${iterator} is even`);
    } else {
        console.log (`${iterator} is odd`);
    }
}

// break - steps the execution outside the loop;
// continue - steps over to the next iteration;
for (let iterator = 0; iterator <= 30; iterator++) {
    if (iterator === 3) {
        break;
    }
    
    console.log(iterator);
}

