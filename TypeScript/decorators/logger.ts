function Logger(constructor: Function) {
    console.log('Logging...');
}

@Logger
class Person {
    public name: string = 'Max';

    constructor() {
        console.log('Creating person object...');
    }

}
const p1 = new Person();

console.log(p1);
