
// Default values
function multiply (x = 1, y = 1) {
    return x * y;
}

console.log(multiply());

const greet = (person, greeting = 'Hello') => {
    console.log(`${greeting}, ${person}!`);
}

greet('Luke');


// Spread
// Expands an iterable into a list of arguments

// for instance, Math.max must have individual values passed,
// if we have an array of numbers we can use spread to pass in
// the array as individual arguments
const nums = [9, 3, 2, 8];
let max = Math.max(...nums);

console.log(max);


const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[...nums1, ...nums2];
// 1, 2, 3, 4, 5, 6
['a', 'b', ...nums2];
// a, b, 4, 5, 6
[...nums1, ...nums2, 7, 8, 9];
// 1, 2, 3, 4, 5, 6, 7, 9, 9



const feline = {
    legs: 4, 
    family: 'Felidae'
};

const canine = {
    family: 'Caninae', 
    furry: true
};

const dog = { ...canine, isPet: true };
// { family: "Caninae", furry: true, isPet: true }

const lion = { ...feline, genus: 'Panthera' };
// { legs: 4, family: "Felidae", genus: "Panthera" }

const catDog = { ...feline, ...canine }
// { legs: 4, family: "Caninae", furry: true }

// conflicting properties overwrite one another