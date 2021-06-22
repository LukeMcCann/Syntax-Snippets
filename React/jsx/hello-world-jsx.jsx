//jsx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

// compiles to
const element = React.createElement('h1', null, 'Hello, World!');
ReactDOM.render(element, document.getElementById('root'));
