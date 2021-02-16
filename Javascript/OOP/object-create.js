// Object.create
//
// Another way to create objects is using Object.create,
// this allows us to create prototypes inside of a parent object
// defining different properties and prototype functions.
//
// This is an alternative to using the new keyword and is actually,
// what "new" does under the hood, you may come accross this when
// looking at older (legacy) JS code.

const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    changeName: function(firstName) {
        this.firstName = firstName;
    },
    changeSurname: function(lastName) {
        this.lastName = lastName;
    }
}

const luke = Object.create(personPrototypes);
luke.firstName = 'Luke';
luke.lastName = 'McCann';
luke.age = 25;

console.log(luke.greeting());
luke.changeName('Newt');
console.log(luke.greeting());

const robert = Object.create(personPrototypes, {
    firstName: {value: 'Robert'},
    lastName: {value: 'McCann'},
    age: {value: 71}
});

console.log(robert);

console.log(robert.greeting());