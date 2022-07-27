import pickBy from 'lodash/pickBy';

var object = pickBy({ 'a': 1, 'b': '2', 'c': 3, d: undefined }, v => v !== undefined);
 
console.log(object);

// { 'a': 1, 'b': '2', 'c': 3 }
