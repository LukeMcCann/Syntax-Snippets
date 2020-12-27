// DOM Selectors



/** 
 * Multiple Element Selectors
 **/

/** 
 * Single Element Selectors
 **/

let task_title = document.getElementById('task-title');
console.log(task_title);

console.log(task_title.id);
console.log(task_title.className);

task_title.style.backgroundColor = 'aqua';
task_title.style.padding = '5px';
// task_title.style.display = 'none';

task_title.textContent = 'Hacked Content!';
// task_title.innerText = 'Inner Text';
task_title.innerHTML = '<h3 style="color: red; background-color: black">Task List</h3>';

// Query Selector: newer thant getElementById and more flexible

// Get by id
task_title = document.querySelector('#task-title');
console.log(task_title);

// Get by class
let card_title = document.querySelector('.card-title');
console.log(card_title);

// If there are more than one of the same element, 
// only the first is returned
let first_h5 = document.querySelector('h5');
console.log(first_h5.textContent);

// target first list item
let first_li = document.querySelector('li');
first_li.style.backgroundColor = 'green';

// target nested element
let input_field = document.querySelector('form .input-field');
input_field.style.backgroundColor = 'orange';

// select last item
let last_li = document.querySelector('li:last-child');
last_li.style.backgroundColor = 'pink';

// select nth item
let nth_li = document.querySelector('li:nth-child(3)').style.backgroundColor = 'yellow';