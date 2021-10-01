import ReactDOM from "react-dom";
import { Component } from "react";

class Hello extends Component {
  render() {
    return (
      <header className="header">
        <h1>Hello {this.props.toWhat}</h1>
      </header>
    );
  }
}

ReactDOM.render(<Hello toWhat="World" />, document.getElementById("root"));
