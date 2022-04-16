class Animal {
    private species: string;

    constructor(
        species,
    ) {
        this.species = species;
    }

    getSpecies(this: Animal): string {
        return this.species;
    }

    setSpecies(this: Animal, species: string) : void {
        this.species = species;
    }
}


const dog = new Animal('Canid');

console.log(dog.getSpecies());
