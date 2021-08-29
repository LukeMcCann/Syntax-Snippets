
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
    roar() {
        return 'RAWARARWOOOW!';
    }
}

const sally = new Couger('sally', 12);
const rupert = new Dog('rupert', 2);

sally.roar();
