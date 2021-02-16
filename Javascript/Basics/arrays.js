let colors = ['red', 'green', 'blue'];

console.log(colors[0]);

console.log(colors[colors.length-1]);

console.log(
    colors.forEach(function (color) {
        color = 'red' ? response = 'Horde' : response = 'Alliance';
        console.log(response);
    })
);


colors[1] = 'purple';

colors[colors.length] = 'orange';

colors.push('grey');

colors.pop();

colors.unshift('aqua');

colors.forEach(function (color) {
    console.log(color);
});

console.log(colors.shift());

let cats = ['bengal', 'siamese'];

let dogs = ['retriever', 'dalmation', 'beagle'];

let animals = cats.concat(dogs);

let humanoids = ['Homosapiens'];

let beings = animals.concat(humanoids);

animals.forEach(function (animal) {
    console.log(animal);
});

beings.forEach(function (being) {
    console.log(being);
})

console.log(beings.includes('retriever'));

console.log(beings.includes('Homosapiens', 4));

console.log(beings.indexOf('bengal'));

console.log(beings.indexOf('bengal', 3));

let numbers = [1, 4, 5, 6, 7, 8, 9, 2, 3];

console.log(numbers.reverse().sort());

console.log(numbers.join());

console.log(typeof numbers.join());

console.log(numbers.slice(0, 3));

numbers.splice(2, 0, 'undefined')
console.log(numbers);

console.log(numbers.splice(2, 3));
console.log(numbers);