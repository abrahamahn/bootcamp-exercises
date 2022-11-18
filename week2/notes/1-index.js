function calculations() {
    let total = 0;
    let a = 1;
    let b = 2;
    let c = 3;
    total = a + b + c;
    return total;
}

function powerOf3(num) {
    return number ** 3;
}

try {
    powerOfThree(9);
} catch(e) {
    alert(`Some error occurred`);
}

alert(`Welcome to my website`);

//calculations();

function getUserName(user) {

    return user.name;
}

getUserName({ name: `John`}); // works
getUserName();

try {
    getUserName();
} catch(e) {
    //present some nice message to the user
}