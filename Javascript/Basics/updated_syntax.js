
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


// REST
// Collects items into a single array
// the old method of this was done using arguments as below:

function args() {
    console.log(arguments);
}
args();

// Shortocmings of arguments:
//          arguments is not a real array unless converted using spread [...arguments]
//          there is no functionality for collecting remainnig arguments
//          the arguments function does not exist in arrow functions
// arguments is a collection of the arguments passed in to the function
// instead of iterating over these arguments in the traditional
// method, using a for loop, we can use REST

// We use REST to convert the singular numbers into an array,
// allowing for the use of reduce on the nums array
function sumAll(...nums) {
    return nums.reduce((total, index) => {
        return total + index;
    }
)}

console.log(sumAll(100, 20, 30, 90));


// REST may also be used to collect
// all remaining arguments, 
// those arguments which have not been
// matched with a parameter

function fullName(first, last, ...titles) {
    console.log('First: ', first);
    console.log('Last: ', last);
    console.log('Titles: ', titles);
}

fullName('Luke', 'McCann', 'Doctor', 'Master');


const times = (...nums) => (
    nums.reduce((total, index) => total * index )
);

console.log(times(2,3,4));


let float = 2.33443445253324;

console.log(float.toFixed());

console.log(float.toFixed(2));