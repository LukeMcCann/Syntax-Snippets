// Constructor Function
function Person(name) {
    this.name = name;
}

// Create Person Objects
luke = new Person('Luke');
robert = new Person('Robert');
darryl = new Person('Darryl');

console.log(luke.name);
console.log(darryl.name);
console.log(robert.name);


// the 'This' keyword refers to the current instance
function Animal(species) {
    this.species = species;
    console.log(this);
}

tiger = new Animal('Tiger');

// if the This keyword is used outside of a class it returns the window object
// this is because we are using it inside of the global scope.

console.log(this);
