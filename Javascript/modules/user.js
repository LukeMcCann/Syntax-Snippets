export default class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(`Hi, I am ${this.name}`);
    }
}

export function printName(user) {
    console.log(user.name);
}

export function printAge(user) {
    console.log(user.age);
}

// export default User;
// export { printName, printAge } 
