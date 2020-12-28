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


let lis = document.getElementsByTagName('li');

// console.log(lis);

// array methods such as reverse are not available for HTML collecitons
// We can convert HTML colleciton into array 

// lis = Array.from(lis);
// lis.reverse();
// console.log(lis);