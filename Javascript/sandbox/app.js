// DOM Selectors



// Multiple Element Selectors 

// Single Element Selectors

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