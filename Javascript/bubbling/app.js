// Event Bubbling 
//
// In JS, when events occur on an element,
// JS first runs the handlers on the element triggered.
// It then runs the handlers on the elements parent,
// grandparent, and so-on throughout the other ancestors
// until it reaches the final overall parent in the DOM.
//
// In the below this causes issues, if we wanted to click a button
// and change the background color, but at the same time
// wanted to hide the div on click of the div element, due to bubbling,
// when we click the element we will both change the color and hide the
// element one after the other due to the click event running the handler
// on the button, then bubbling up, and running the handler on the div.
//
// This is obviously not the intended functionality of the developer.
// Fortunately, there is an easy way to prevent bubbling in circumstances
// where we don't want our events to bubble. Much like when we don't
// want a form submission to resolve to a new page, (using preventDefault())
// we can call the function stopPropogation on the event object to prevent 
// the bubbling of events.

const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
