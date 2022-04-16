class Person {
    constructor(
        private id : number,
        public name : string
    ) {}

    getId(this: Person) : number {
        return this.id;
    }

    setId(this: Person, id: number) : void {
        this.id = id;
    }

    getName(this: Person) : string {
        return this.name;
    }

    setName(this: Person, name: string) : void {
        this.name = name;
    }
}

const larry = new Person(1, 'Larry');

larry.setId(2);

console.log(larry.getId());
console.log(larry.getName());
