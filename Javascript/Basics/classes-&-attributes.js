// Classes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

console.log(link.className);
console.log(link.classList);
console.log(link.classList[0]);

link.classList.add('test');

console.log(link);

link.classList.remove('test');


// Atributes
link.setAttribute('href', 'https://google.com');
console.log(link.getAttribute('href'));

console.log(link.hasAttribute('href'));
console.log(link.hasAttribute('title'));

link.setAttribute('title', 'test');

console.log(link.hasAttribute('title'));

link.removeAttribute('title');
