//Reduce reduces the array to one value
let numbers = [1, 2, 3, 4];

let result = numbers.reduce((accumlator, currentValue) => {
    //console.log(accumulator, currentValue);
    return accumlator + currentValue;
});

console.log(result);

let people = [
    { name: `Allen`, age: 49 },
    { name: `Nettie`, age: 21 },
    { name: `Stuart`, age: 17 }
]

//1. Filter out people that are not old enough to drink
let drink = people.filter((person) => {
    return person.age > 18 && person.name === `Allen`;
});

console.log(drink)

let mappedDrink = drink.map((person) => {
    return person.name;
})

console.log(drink);

