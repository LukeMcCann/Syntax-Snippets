// Inheritance in ES6 (subclassing)
//
// Subclasses are child classes of parents.
// classes are inherited by extending the parent class.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
}

let luke = new Person('Luke', 'McCann');

console.log(luke.sayFullName());

// When we extend a class we must use the super class
// to pass parameters to the parent via the constructor
class Customer extends Person {
    constructor(firstName, lastName, phoneNumber, membership) {
        super(firstName, lastName);
        this.phoneNumber = phoneNumber;
        this.membership = membership;
    }

    giveNumber() {
        return `My number is ${this.phoneNumber}`;
    }

    static getMembershipCost() {
        return 500;
    }
}

let darryl = new Customer('Darryl', 'Dolan-Rathmell', '07845 765 737', 'Full');

console.log(darryl.sayFullName());
console.log(darryl.giveNumber());

console.log(Customer.getMembershipCost());

// This should fail
console.log(luke.giveNumber());
