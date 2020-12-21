// Standard sorting sorts by string
const prices = [100.20, 200.30, 3000, 99.99, 43.97, 12.2, 9000];

const sortedAsString = prices.sort();

console.log(sortedAsString);

// Sort ascending
const sortedAsInteger = prices.sort((a, b) => a - b);
console.log(sortedAsInteger);

// Sort descending
let experimental = prices.sort((a, b) => b - a);
console.log(experimental);

const names = ['Alfred', 'Robert', 'Benjamin', 'Zamazenta', 'Yuri', 'xing', 'cat', 'kat'];
let sortedNames = names.sort();

console.log(sortedNames);
