// Interfaces allows us to declare the shape of an object.
// once we have an interface created we can use it as we would a type
// TS will enforce that our objects then adhere to the same shape as out interface.

interface Person {
    name: string,
    age: number,

    greet();
}


let user1: Person;

user1 = {
    name: 'Tim',
    age: 23,

    greet() {
        return 'Hello World!';
    }
}
