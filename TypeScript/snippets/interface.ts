// Interfaces allows us to declare the shape of an object.
// once we have an interface created we can use it as we would a type
// TS will enforce that our objects then adhere to the same shape as out interface.


// whilst we can often use types and interfaces interchangeably they are not of exact equivalence.
// We would often use an interface in conjunction with classes to enforce a contract that the 
// class must adhere to.


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
