
// Spread
const numbers = [1, 2, 3];

const arr = [...numbers, 4];

console.log(arr);


const person = {
  name: 'Max',
};

const newPerson = {
  ...Person, 
  age: 28,
}

console.log(newPerson);


// Rest

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3));
