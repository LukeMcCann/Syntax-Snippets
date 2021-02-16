// Local and Session Storage

// localStorage API contains many methods for simplicity.
// LocalStorage works to set a key value pair for the items to be stored,
// values must be in string format, you can still save other types (e.g. arrays) 
// but they must first be converted to a string using the json.stringify() method, reading
// them back with json.parse().


// Set local storage item
localStorage.setItem('name', 'Luke');

// Get local storage
console.log(localStorage.getItem('name'));


// Set session storage item
sessionStorage.setItem('name', 'Robert');

// Get session storage item
console.log(sessionStorage.getItem('name'));

// Session storage does not persist after the browser session is termianted.
// Local storage will persist after a session termination. Methods available on
// both storage objects are the same.


// Remove from storage
localStorage.removeItem('name');

// clear storage
localStorage.clear();
sessionStorage.clear();


// Save task to localstorage on submission
document.querySelector('form').addEventListener('submit', (e) => {
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
});