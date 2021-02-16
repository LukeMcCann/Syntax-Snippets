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


// Object Methods
function Gearbox(currentGear) {
    this.currentGear = currentGear;

    this.gearUp = function() {
        if (currentGear <= 0 && currentGear >= 6) return;

        this.currentGear++;
    }

    this.gearDown = function() {
        if (currentGear <= 0 && currentGear >= 6) return;

        this.currentGear--;
    }
}

gearbox = new Gearbox(1);

console.log(`CurrentGear: ${gearbox.currentGear}`);

gearbox.gearUp();

console.log(`CurrentGear: ${gearbox.currentGear}`)

gearbox.gearDown();

console.log(`CurrentGear: ${gearbox.currentGear}`)
