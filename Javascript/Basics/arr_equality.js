let nums = [1, 2, 3];
let mystery = [1, 2, 3];

// Falsey
console.log(nums === mystery);

console.log(nums == mystery);

let nums2 = nums;

console.log(nums2 === mystery)

// Truthey
console.log(nums === nums2);

nums2 = mystery;

console.log(nums2 === mystery)

// When we use reference values we are referring to the memory address
