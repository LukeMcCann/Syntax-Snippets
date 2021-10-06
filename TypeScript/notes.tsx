// TypeScript

// Enforcing Strict Typing, interfaces can  be used to explicitly describe objects:

// We first declare the interface
interface User {
    name: string,
    age: number,
}

// We then declare that the JS object conforms the the declared interface
const user : User = {
    name: 'testUser',
    age: 27, 
};
