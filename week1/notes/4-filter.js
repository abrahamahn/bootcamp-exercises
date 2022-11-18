// Filter returns a new array. based in a condition
// Only returns the items that pass the condition

let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(numbers);
console.log(evenNumbers);

let names = [`joao`, `jack`, `salome`, `francisco`]
let newNames = names.filter((name) => {
    return name.length < 9;
})

console.log(newNames);

let moreNames = [`luis`, `alicia`, `rodrigo`, `margarida`, `abe`];
//using filter return a new array without 'rodrigo'
let filterName = names.filter((name) => {
    return name !== `rodrigo`
});

console.log(filterName);

let people = [
    { name: `Allen`, age: 49 },
    { name: `Nettie`, age: 21 },
    { name: `Stuart`, age: 17 }
]

//1. Filter out people that are not old enough to drink
let legalAge = people.filter((person) => {
    return person.age > 21;
})