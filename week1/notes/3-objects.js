// primitive data types
// number
// string 
// booean
// undefined 
// null

//non-primitive
// array
//object

let myArray = [1, 2, 3, "dasda", true];
let myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

let olympicRecords = {
    athletic100Men: 'Justin Gatlin',
    athleticLongJumpMen: 'Mike Powel'
}

let keyToRetrieve = 'athletic100Men';

console.log(olympicRecords.athletic100Men);
console.log(olympicRecords[keyToRetrieve])

olympicRecords.swimming200Men = 'Michael Phelps';

console.log(olympicRecords);

olympicRecords.netflixMarathon = "James";
console.log(olympicRecords);

console.log(olympicRecords.netflixMarathon);

console.log('swimming200Men' in olympicRecords); // => true
console.log('swimming1000Men' in olympicRecords); // => false

delete olympicRecords.netflixMarathon;

console.log(olympicRecords);
console.log(Object.keys(olympicRecords));

for(let key in olympicRecords) {
    // 'athletic100Men'
    console.log(olympicRecords[key]);
}

// 1. create a user object that has name and an id(1, 2, 3, 4);

let user = {
    name: 'Alicia',
    id: 2
}

// 2. create book object that has title, author, category

let book1 = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    category: 'Fantasy'
}

let book2 = {
    title: 'catcher in the rye',
    author: 'J.D. Salinger',
    category: 'Classic Literature'
}

// 3. Relate books to user

user.books = [book1, book2];

console.log(user);
user.books[0].title = 'Jerry Potter';
console.log(user);

let library = [];
library.push(user);

//4. Iterate through all the users (one user) - (for loop)
//5. Iterate through each user property - (for key in)

let user2 = {
    name: 'Miguel',
    id: 3,
}

library.push(user2);

for (let i=0; i < library.length; i++) {
    //console.log(library[i]);
    let user = library[i];
    console.log(user.name);
    console.log(user.id);
    
    /* for (let key in user) {
        console.log(user[key]);
    } */
}