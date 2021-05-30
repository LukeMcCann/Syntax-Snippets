let person = {
    firstName: 'Luke',
    lastName: 'McCann',
    greet: () => {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
};

person.greet();
console.log(person['firstName']);
