// Prototypal Inheritance
//
// Coming from a class language background you should be familiar with
// inheritance. Inheritance is a mechanism in which one object gains
// the properties and behaviours of the parent object. 
//
// Methods may still be overridden with differing funcitonality
// but this generally allows for objects with similar funcitonality
// to inherit from a single object instead of implementing the same 
// function over and over within each object/class.
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greet
Person.prototype.greet = function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}`;
}

luke = new Person('Luke', 'McCann');

console.log(luke.greet());

// Now that we have a Person object we can inherit from our Person.
// Lets say we have a particular "type" of Person (a Customer for instance)
// A Customer is still a Person, but with addiitonal funcitonality,
// therefore instead of defining the same properties or behaviours twice
// we can instead inherit from Person.
//
// The call() method allows us to call another function elsewhere in
// the current context.
//
// Here we call the call method on he Person object, passing the 
// the properties relevant to the person object.
//
// While we have called the call function and our properties
// are now accessible from our Customer class, you will notice
// the Customer object is not yet inheriting the Person greet() method.
// 
// In order for our Customer to inherit the methods from our Person
// prototype, we need to explicitly inherit from our prototype, similar
// to how in a class based language we must explicitly extend our class.
// This is conducted via the Object.create() method,
// this creates a new object using an exisiting object as the prototype
// of the newly created object.
//
// We then set the constuctor to be the Customer constructor, by
// default this will be the Person constructor.
//
// To override methods we can simply set the method to 
// a new function by selecting it in the prototype:
//
//  e.g. Customer.prototype.greet

// Customer
function Customer(firstName, lastName, phoneNumber, membership) {
    Person.call(this, firstName, lastName);
    this.phoneNumber = phoneNumber;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return Customer not Person
Customer.prototype.constructor = Customer;

// Override Methods
Customer.prototype.greet = function () {
    return `Yo, I'm ${this.firstName} ${this.lastName}`;
}

mike = new Customer('Mike', 'Roads', '07983 828 323', 'Full');
console.log(mike);

console.log(mike.greet());
