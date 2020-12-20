// ForEach
const nums = [1,2,3,4];

// nums.forEach(function (n) {
//     console.log(n * n);
// });


function printTriple(n) {
    console.log(n * 3);
}

nums.forEach(printTriple);

const books = [
    {
        title: 'Goblet of Fire',
        authors: ['J.K. Rowling'],
        rating: 1.2
    },
    {
        title: 'The Fellowship',
        authors: ['J. R. R. Tolkien'],
        rating: 5
    }
]

books.forEach(function (book) {
    console.log(book.title.toUpperCase());
});

// this can be done using forOf, the difference here is forOf
// is simply a code block loop whilst forEach calls a method
for (let book of books) {
    console.log(book.title.toLowerCase());
}


// Map - create new array from existing array
let numbers = [10, 20, 4, 32, 10, 5];
let newArray = numbers.map(timesTen);

function timesTen(num) {
    return num * 10;
}

// this can also be done with anonymous functions
let doubled = numbers.map(function (num) {
    return num * 2;
});

const objectExample = numbers.map(function (n) {
    return {
        vaue: n,
        isEven: n % 2 === 0
    }
});

console.log(newArray);

console.log(doubled);

console.log(objectExample);

const acronyms = ['asap', 'byob', 'rsvp', 'diy'];

const abbreves = acronyms.map(function (word) {
    return word.toUpperCase().split('').join('.');
});

console.log(abbreves);

let contacts = [
    'Bob McCann',
    'Jean McCann',
    'Jacqueline McCann',
    'Darryl Dolan',
    'Luke McCann'
];

let contact = contacts.find(contact => contact.indexOf('Darryl') === 0);

console.log(contact);