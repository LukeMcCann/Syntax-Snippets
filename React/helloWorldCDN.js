const App = (props) => {
    return React.createElement(
        'h1', 
        {},
        `Hello ${props.toWho}`,
    );
};

ReactDOM.render(
    React.createElement(App, { toWho: 'World' }),
    document.getElementById('root'),
);
