// Random Whole number
function randomWholeNum() {
    return Math.floor(Math.random() * 20);
}  
console.log(randomWholeNum());

// Random Range
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Convert Binary
// The second argument of parseInt is the radis (the base numeber)
function convertBinToInteger(bin) {
    return parseInt(bin, 2);
}
console.log(convertBinToInteger("10011"));

// Chaining ternary operators
function checkSign(num) {
    return num > 0 ? 'positive' 
        : num < 0 ? 'negative' 
        : 'zero';
}
console.log(checkSign(10));

// Recursive
//
// At first, this seems counterintuitive since the value of n decreases, 
// but the values in the final array are increasing. This happens because the push 
// happens last, after the recursive call has returned. At the point where n is
//  pushed into the array, countup(n - 1) has already been evaluated and returned 
// [1, 2, ..., n - 1].
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

// Countdown ternary
function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}

// Countodown Spread
function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}

// Countdown Splice
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.splice(0, 0, n);
      return arr;
    }
}

// Countdown Unshift
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
}