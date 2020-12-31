// Event bubbling is the bubbling up of events through the Document Object Model (DOM)
// This means when an event is fired on a child element, the event bubbles up through
// the parent classes

// document.querySelector('.card-title').addEventListener('click', (e) => {
//     console.log('card title');
// });

// // Parent of card-title
// document.querySelector('.card-title').addEventListener('click', (e) => {
//     console.log('card title');
// });


// // // Parent of card-content
// document.querySelector('.card').addEventListener('click', (e) => {
//     console.log('card');
// });

// // // Parent of main
// document.querySelector('.col').addEventListener('click', (e) => {
//     console.log('col');
// });

// Due to event bubbling when you click the card-title, the event bubbles up through each of
// the parents, this in turn firest the events of each of the click functions on these elements.


// Event Delegation

// Event delegation can be thought of as the opposite of event bubbling. Rather than a child
// firing an event and bubbling up through the DOM, event delegation is when the parent
// fires an events and delegates it downward through the DOM to it's child element.

// This can be useful for having events fire, such as a delete event in a list
// where each list item has a delete button (like in the ul in todo.html).

// Without Delegation
// Uncomment the below lines and then try clicing the delete buttons on the list items,
// what happens?

const delItem = document.querySelector('delete-item');

delItem.addEventListener('click', (e) => {
    console.log('delete item');
});