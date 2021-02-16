// Reduce
// executes a provided reducer funciton on each element of an array
// producing a single output value
// In layments terms, it takes an array of vlaues
// and reduces them down to a single value

// Sum all elements in array
// accumulator stores the accumulated value - the end result of reduce
// currentValue is the current item in the array - each individual element 
// of the array as the reducer work it's way through
//
// the accumulator starts as the first item in the array
// the currentValue starts as the next element
// in this instance this would be accumulator = 100 and currentValue = 2
// we then add the accumulator to the currentValue = 102
// the returned value is then used as the accumulator in the next iteration
// with currentValue once again equating to the next value in the array
// in this case this equates to accumulator = 102 currentValue = 5
// this pattern continue until completion
const unordered = [100, 2, 5, 8, 3, 10];

let sum = unordered.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);


// Multiply
const multiply = [3, 4, 5, 6, 7];

let result = multiply.reduce((total, currentValue) => {
    return total * currentValue;
});

console.log(result);

// Find Max
const grades = [93, 92, 80, 72, 63, 74, 87, 82, 99];

// let topGrade = grades.reduce((max, index) => {
//     index > max ? max = index : max = max;
//     return max;
// });

let topGrade = grades.reduce((max, index) => {
    return Math.max(max, index);
});

console.log(topGrade);

let bottomGrade = grades.reduce((min, index) => {
    return Math.min(min, index);
});

console.log(bottomGrade);

// Reduce can also take an initial starting value
// as a second parameter

let add = unordered.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 2000);

console.log(add);


// We can also use reduce to tally items of an array

const votes = ['y', 'y', 'n', 'y', 'y', 'n', 'n', 'y', 'y', 'n', 'n', 'y', 'y', 'n'];

// const results = votes.reduce((tally, index) => {
//     if (tally[index]) {
//         tally[index]++;
//     } else {
//         tally[index] = 1;
//     }
// }, {});

const results = votes.reduce((tally, index) => {
    tally[index] = (tally[index] || 0) + 1;
}, {});