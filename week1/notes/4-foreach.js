let myArray = [2, 10, 30, 54, 12];

/* for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
} */

myArray.forEach(function(element) {
    console.log(element);
});

myArray.forEach((element) => {
    console.log(element);
});

//To start, keep in mind that .map(), .filter() and .reduce() methods DON’T modify the original array, that is - they don’t mutate the original array but rather create a new array.

//1. create an array of strings
//2. iterate through that array using a foreach and console log each item

let array = [`Abe`, `Jack`, `John`, `Smith`]
array.forEach((element) => console.log(element));
// with foreach you cannot use break;
// with foreach you cannot use continue;

//1. Create a for each to sum the values of the following array:
let arrayToSum = [1, 2, 3, 4, 5];
let sum = 0;

/* arrayToSum.forEach((element) => {
    sum += item; // same as sum = sum + item;
});
*/

let iterator = (item) => {
    sum+= item;
}

arrayToSum.forEach(iterator);

console.log(sum);