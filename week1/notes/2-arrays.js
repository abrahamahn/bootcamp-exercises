// Array
const arrayNames = ['Pedro', 'Jake', 'Joan', 'Mike'];
const anotherArray = ['Pedro', 2, true];
//console.log(anotherArray[0]);
//console.log(anotherArray[2]);
let thisVariableWillEventuallyChangeItsValue = "Celsius"
const iDontWantThisVariableToChangeItsValue = "Celsius";

// .push adds element at the end
arrayNames.push('Francisco');
console.log(arrayNames);

// .unshift adds element in the beginning
arrayNames.unshift('Rachel');
console.log(arrayNames);

// .splice deletes an element from an array
// array.splice(start, deleteCount)
arrayNames.splice(0, 1);
console.log(arrayNames);

// iterating arrays
for(let i = 0; i < arrayNames.length; i++) {
    console.log(arrayNames[i]);
}

anotherArray.forEach(function(element) {
    console.log(element);
});

const numbers = [1, 2, 3, 4, 5, 6];
//1. User foreach to iterate through the array and console.log each array
//   elements multiplied by 2.
numbers.forEach(function(element) {
    console.log(element * 2);
})

//.split allows the strings to turn into an array divided by separate words.
let phrase = 'This is a phrase';
let words = phrase.split(' ');
console.log(words[1]);