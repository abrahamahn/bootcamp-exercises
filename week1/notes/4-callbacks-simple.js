// Callback: Simple
function eatDinner(dish, side, callback) {
    console.log(`Eating dinner`, dish, side);
    callback();
}

function eatDessert() {
    console.log(`Eating dessert`);
}

eatDessert();

eatDinner(`chicken`, `rice`, eatDessert);

// Just to call the parameter name, doesn't call it a function
// You can call functions inside other functions
// without braces (), the function doesn't execute and becomes a parameter