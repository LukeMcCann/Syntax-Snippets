// ES6
// ES6 provides a more modern syntax, with similarity to 
// other class based languages. ES6 is much cleaner, but must be 
// compiled down to ES5 to be used with older browsers.
// ES6 is supported by all modern browsers, barring IE 11 or earlier.
//
// If you have come from a class based language, this syntax will be much
// more understandable. ES6 uses the class keyword, and constructor method.
class Person {

    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    changeName(firstName) {
        this.firstName = firstName;
    }

    changeSurname(lastName) {
        this.lastName = lastName;
    }

    // static method
    static addNumbers(x, y) {
        return x + y;
    }
}

const luke = new Person('Luke', 'McCann', '5-17-95');

console.log(luke.greet());
console.log(luke.calculateAge());
luke.changeName('Newt');
console.log(luke.greet());

// Calling static method
console.log(Person.addNumbers(1,2));