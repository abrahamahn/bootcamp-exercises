let people = [`Rita`, `Ana`, `Sara`, `Miguel`];

let sortedPeople = people.sort().reverse();
console.log(sortedPeople);

let numbers = [5, 6, 7, 1, 118];
let sortedNumbers = numbers.sort((a, b) => {
    //if (a < b) return -1;
    //if (a > b) return 1;
    return a - b
});

console.log(sortedNumbers);
// when you have you cannot sort with numbers.