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