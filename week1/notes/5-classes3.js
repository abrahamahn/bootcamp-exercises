class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    eat(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    }

    sleep(length) {
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    }
    
    player2(length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }

}

//Animal class should have 2 properties when instanciating
//name
//energy
//3 methods
//eat sleep and play

let animals = [];
for (let i = 0; i < 10; i++) {
    animals.push(new Animal(`john`), 100);
}

let koala = new Animal('john', 100);
let bear = new Animal('fred', 800);
koala.play(1);
bear.sleep(10)
console.log(koala.energy);
console.log(bear.energy);

class Dog extends Animal {
    constructor(name, energy, breed) {
        super(name, energy);
        this.breed = breed;
    }

    bark() {
        console.log(`Woof woof`);
        this.energy -= 1;
    }
}

let dog1 = new Dog(`turbo`, 100, `german sheppard`);
dog1.bark();