// Event Delegation

// Event delegation can be thought of as the opposite of event bubbling. Rather than a child
// firing an event and bubbling up through the DOM, event delegation is when the parent
// fires an events and delegates it downward through the DOM to it's child element.

// This can be useful for having events fire, such as a delete event in a list
// where each list item has a delete button (like in the ul in todo.html).

// Without Delegation
// Uncomment the below lines and then try clicing the delete buttons on the list items,
// what happens?

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', (e) => {
//     console.log('delete item');
// });

// only the first items button in the list will fire, this is why we need to use delegation.
// Another instance for the use of delegation would be if there is a dynamic item
// which was not there when the page was loaded.

document.body.addEventListener('click', delItem);

function delItem(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}