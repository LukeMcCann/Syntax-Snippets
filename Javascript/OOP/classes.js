// We use super() if we want to reference
// the class we are extending from.

// When we do this, we call the constructor, this
// is useful to prevent duplication as rather than
// passing in values manually again, we can instead
// pass the new values into the super which will call the constructor.

class Cat extends Animal {
    meow() {
        return 'MEOW!';
    }
}

class Dog extends Animal {
    bark() {
        return 'WOOF!';
    }
}

class Couger extends Cat {
    constructor(name, age, tamability) {
        super(name, age);
        this.tababiltiy = tamability;
    }
    
    roar() {
        return 'RAWARARWOOOW!';
    }
}

const sally = new Couger('sally', 12);
const rupert = new Dog('rupert', 2);

sally.roar();
