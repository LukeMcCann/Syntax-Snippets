// Primitive types

NaN
true, false
1,2,3
0.1,1.2,1.344
undefined 

// Variable Declaration

let name = 'Luke';

// Global Scope

var name = 'Tom'

// Constants

const constantName = 'Martin';


// Javascript Variables can change type

// TypeScript promotes stricter JS rules

let number = 100;

number = 'Ted';

number = 1.232;

// Strings are indexed

let pokemon = 'Charizard';

console.log(pokemon[1]);


// Space is a character

let whitespace = "                    ";

console.log(whitespace.length);

// Methods

// String

let randomString = Math.random().toString(20).substr(2, 14);

console.log("original: " + randomString);

console.log("toUpperCase: " + randomString.toUpperCase());

console.log("toLowerCase: " + randomString.toLowerCase());

randomString = '      ' + randomString + '        ';

console.log("spaced original: " + randomString);

console.log("trimmed: " + randomString.trim());

let newRandomString = Math.random().toString(20).substr(2, 14) + 'tiddle';

console.log("indexOf: " + newRandomString.indexOf('tiddle'));

console.log("sliceOneArg: " + newRandomString.slice(4));

console.log("sliceTwoArg: " + newRandomString.slice(2,8));

console.log("replace: " + newRandomString.replace('tiddle', 'martin'));

// Method chaining

console.log("trimmed: " + randomString.trim().toUpperCase());


// Random String
const generateRandomString = function (length, randomString="") {
    randomString += Math.random().toString(20).substr(2, length);
    if (randomString.length > length) return randomString.slice(0, length);
    return generateRandomString(length, randomString);
  };