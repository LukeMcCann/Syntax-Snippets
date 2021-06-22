function Welcome(props) {
  return <h1>Hello, {props.name} {props.surname}</h1>;
}

const element = <Welcome name="Sara" surname="Thompson" />;
ReactDOM.render(element, document.getElementById('root'));
