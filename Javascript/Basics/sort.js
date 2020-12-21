// Standard sorting sorts by string
const prices = [100.20, 200.30, 3000, 99.99, 43.97, 12.2, 9000];

const sortedAsString = prices.sort();

console.log(sortedAsString);

// Using compareFunc(a,b) if the compareFunc returns a negative value
// the values are sorted a before b
// otherwise if the compareFunc returns a positive value it sorts b before a
// take this array for instance:
//
//      const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
//
//      const sortedPricesAsc = prices.sort(a, b) => a - b);
//  
// if we run our comapre func in the first instance we have:
//
//      a = 400.50;                     b = 3000;
// 
// in our comapreFunc we have: a - b
// 
// this equates to: 400.50 - 3000 = -2,599.5
// therefore a is sorted to be before b
//
// coming to the end of the array we have a = 35.99 and b = 12.00
// in this instance we have: 35.99 - 12.00 = 23.99
//
// 23.99 is a positive number, therefore b is ordered before a

// Sort ascending
const sortedAsInteger = prices.sort((a, b) => a - b);
console.log(sortedAsInteger);

// Sort descending
let experimental = prices.sort((a, b) => b - a);
console.log(experimental);

const names = ['Alfred', 'Robert', 'Benjamin', 'Zamazenta', 'Yuri', 'xing', 'cat', 'kat'];
let sortedNames = names.sort();

console.log(sortedNames);
