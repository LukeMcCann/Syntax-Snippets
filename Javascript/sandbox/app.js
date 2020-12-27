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