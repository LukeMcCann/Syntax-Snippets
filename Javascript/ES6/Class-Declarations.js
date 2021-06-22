let Rectangle = class {
    constructor(height, width) {
        this.height = height; 
        this.width = width; 
    }
};

let rect = new Rectangle(10, 10);

let Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }  
};

let bob = new Person('Bob', 73);
