'use strict';

// Objects and Properties
let obj = {
  greet: 'Hello',
}

console.log(obj.greet);
console.log(obj['greet']);


let prop = 'greet';
console.log(obj[prop]);

// Functions and Arrays
let arr = [];
arr.push(() => {
  console.log('Hello Function 1');
});
arr.push(() => {
  console.log('Hello Function 2');
});
arr.push(() => {
  console.log('Hello Function 3');
});

arr.forEach((item) => {
  item();
});

