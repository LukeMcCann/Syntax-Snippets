// Write a function that returns true if and only if all numbers in an array are even.

const allEvens = (numbers = []) => numbers.every(number => number % 2 === 0);
