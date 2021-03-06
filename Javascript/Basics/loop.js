for (let i = 0; i <= 10; i++) {
    console.log(i);
}

const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

let x = 0;
while (x !== 20) {
    console.log(x);
    ++x;
}


// Forof (similar to foreach PHP)
let items = ['milk', 'eggs', 'chicken'];

for (let item of items) {
    console.log(item);
}

// forIn loops

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
