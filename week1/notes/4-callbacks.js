// callback -> function that is passed as a parameter to another function

function eatDinner(callback, meal/*function*/) {
    //getting information from an external database
    setTimeout(function() { // <- just simulating some delay
    console.log(`Eating the dinner`, meal);
    mycallback(); // <- I'm executing the callback which in this case // is eat dessert
}, 1000);

function eatDesser() {
    console.log(`Eating the dessert`);
}

let myMeal = `chicken`;
eatDinner(eatDessert, myMeal);

eatDinner(eatDessert);
eatDessert();
