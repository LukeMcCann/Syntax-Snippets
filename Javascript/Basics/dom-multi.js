// DOM Selectors

/** 
 * Multi Element Selectors
 **/

// Multi element selectors return a HTMLCollection of elemnts

// let items = document.getElementsByClassName('collection-item');

// Get first list item
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'Charmander';



// let listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);


// let lis = document.getElementsByTagName('li');

// console.log(lis);

// array methods such as reverse are not available for HTML collecitons
// We can convert HTML colleciton into array 

// lis = Array.from(lis);
// lis.reverse();
// console.log(lis);

// lis = Array.from(lis);

// lis.forEach(element => {
//     console.log(element.className);
// });

// lis.forEach(li => {
//     li.textContent = 'Awesome';
// });


// Node list
// let lis = document.querySelectorAll('ul.collection.li.collection-item');
// console.log(lis);

// let items = document.querySelectorAll('ul li');

// items.forEach((item, index) => {
//     item.textContent = `${index}: Hello`;
// });

let listItemsOdd = document.querySelectorAll('ul li:nth-child(odd)');
let listItemsEven = document.querySelectorAll('ul li:nth-child(even)');

listItemsOdd.forEach((items, index) => {
    items.style.color = 'red';
    items.style.backgroundColor = 'black';
    items.textContent = 'Odd Items';
});

listItemsEven.forEach((items, index) => {
    items.style.backgroundColor = 'aqua';
    items.style.color = 'green';
    items.textContent = 'Even Items';
})


