class Person {

    private NI: string; // longhand fields

    constructor(
        private id : number,
        public name : string // shorthand fields can be used if we use them in the constructor
    ) {}

    // We tell TS what to expect THIS to point to, in this case it must point to an instance of Person
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

    setNI(this: Person, NI: string) : void {
        this.NI = NI;
    }

    getNI(this: Person) : string {
        return this.NI;
    }
}

const larry = new Person(1, 'Larry');

larry.setId(2);

console.log(larry.getId());
console.log(larry.getName());
