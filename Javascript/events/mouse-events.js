// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Doubeclick
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// MouseOver/Out fire off when we move onto other elements, even within the 
// element which has the event listener attached. Whereas mouseenter/leave
// only fire when actually leaving or entering that element entirely.

// MouseEnter
// card.addEventListener('mouseenter', runEvent);

// MouseLeave
// card.addEventListener('mouseleave', runEvent);

// MouseOver
// card.addEventListener('mouseover', runEvent);

// MouseOut
// card.addEventListener('mouseout', runEvent);

// Mousemove
// card.addEventListener('mousemove', runEvent);
card.addEventListener('mousemove', mouseMoveCoordinatesEvent);

// Event Handlers
// function runEvent(e) {
//     alert(`Event Type: ${e.type}`);
// }

// function runEvent(e) {
//     console.log(`Event Type: ${e.type}`);
// }

function mouseMoveCoordinatesEvent(e) {
    heading.textContent = `MouseX: ${e.offsetX}    :     MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX + e.offsetY * e.offsetX / 2})`;
}