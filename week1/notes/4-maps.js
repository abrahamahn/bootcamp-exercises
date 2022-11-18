// Maps returns a new array

let myArray = [1, 2, 3, 4, 5];

let newArray = myArray.map((item) => {
    //1
    return item*2;
});

console.log(myArray);
console.log(newArray);

let names = [`james`, `goncalo`, `mafalda`, `bernardo`];
//1. Use map to uppercase every item on the names array
// 'joao'.toUpperCase() 'JOAO'

let upperCase = names.map(name => name.toUpperCase());

console.log(upperCase);

/* example 2
let upperNames = names.map((item) => {
    if (item === `james`) {
        return item.toUpperCase();
    } else {
        return item;
    }
})
console.log(upperNames);
*/

let upperNames = names.map((item) => {
    console.log(index);
    return item.charAt(0).toUpperCase() + item.slice(1);
})

console.log(upperNames);