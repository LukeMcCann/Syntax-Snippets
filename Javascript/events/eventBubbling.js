// Event bubbling is the bubbling up of events through the Document Object Model (DOM)
// This means when an event is fired on a child element, the event bubbles up through
// the parent classes

document.querySelector('.card-title').addEventListener('click', (e) => {
    console.log('card title');
});

// Parent of card-title
document.querySelector('.card-title').addEventListener('click', (e) => {
    console.log('card title');
});


// // Parent of card-content
document.querySelector('.card').addEventListener('click', (e) => {
    console.log('card');
});

// // Parent of main
document.querySelector('.col').addEventListener('click', (e) => {
    console.log('col');
});

// Due to event bubbling when you click the card-title, the event bubbles up through each of
// the parents, this in turn firest the events of each of the click functions on these elements.


// Event Delegation