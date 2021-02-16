
console.log('lis Pre Element Creation:')

let lis = document.querySelectorAll('li');

lis.forEach((li, index) => {
    console.log(`${li} : ${index}`);
});

console.log('');
console.log('lis Post Element Creation:');

// Create Element
let li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Item');

// Create Text Node and Append
li.appendChild(document.createTextNode('Hello World'));

// Append li as child of ul
document.querySelector('ul.collection').appendChild(li);

lis = document.querySelectorAll('li');

lis.forEach((li, index) => {
    console.log(`${li} : ${index}`);
});

console.log('');
console.log('New Element:');
console.log(li);


// Create new link element
let link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link as child of li
li.appendChild(link);

// Append li as child of ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);