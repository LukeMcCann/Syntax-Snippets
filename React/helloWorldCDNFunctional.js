const Hello = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, `Hello ${props.toWho}`),
    ]);
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement(Hello, { toWho: 'World'}),
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root'),
);
