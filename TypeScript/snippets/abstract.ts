abstract class Animal {
    constructor(private readonly species: string) {}

    makeNoise() : void {}

    get getSpecies(): string {
        return this.species;
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log('Woof!');
    }
}

class Cat extends Animal {
    makeNoise(): void {
        console.log('Meow!');
    }
}

const tabby = new Cat('feline');
const poodle = new Dog('canid');

console.log(`Tabby is of the species: ${tabby.getSpecies}`);
console.log(`Poodle is of the species: ${poodle.getSpecies}`);

tabby.makeNoise();
poodle.makeNoise();
