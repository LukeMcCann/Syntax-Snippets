// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }
// }

function Person2(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

bob = new Person('Bob');


alert(bob.getName());
