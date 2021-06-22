// React elements are immutable. 
// Once you create an element, you can’t change its children or attributes. 
// An element is like a single frame in a movie: 
//      it represents the UI at a certain point in time.

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// In this example the ReactDom.render function is called every second to update the virtual DOM
// Which the ReactBot then uses to update the Real DOM. Doing this the ReactBot compares
// the previous version of the DOM with the new DOM and only updates the items that have changed
// although we specify a new element entirely. This is to do with state, it allows us to think
// about how the UI should look at any given point in time, rather than how it should change over time.
// think of this as frames in an animaiton.
