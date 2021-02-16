// Built In Constructors
// In JS some core objects have constructors as well, however
// it is not recommended to use them. For instance, primitive
// types such as strings, integers, booleans can be created
// as objects.

/**
 * Strings
 */

// Primitive
const string = 'Luke';

// Object
const stringObject = new String('Luke');

console.log(string);
console.log(stringObject);
console.log('');
console.log(typeof string);
console.log(typeof stringObject);


/**
 * Number
 */
const num = 5;
const numObject = new Number(5);

console.log('');
console.log(typeof num);
console.log(typeof numObject);

/**
 * Boolean
 */
const bool = true;
const boolObject = new Boolean(true);

console.log('');
console.log(typeof bool);
console.log(typeof boolObject);
console.log('');


/** 
 * Function
 */
const getSum1 = (x, y) => {
    return x + y;
}
console.log(getSum1(1,1));

const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum2(1,1));

console.log('');


// Object
const martin = {name: 'Martin'};
const connor = new Object({name: 'Connor'});
console.log(martin);
console.log(connor);
console.log('');

/**
 * Arrays
 */

const arr = [1, 2, 3, 4];
const arrObject = new Array(1, 2, 3, 4);

console.log(arr);
console.log(arrObject);
console.log('');

/**
 * Regex
 */
const rel = /\w+/;
const relObject = new RegExp('\w+');

console.log(rel);
console.log(relObject);
