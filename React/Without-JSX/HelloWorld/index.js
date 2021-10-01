import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";

class Hello extends Component {
  render() {
    return React.createElement(
      "h1",
      { className: "header" },
      `Hello ${this.props.toWhat}`
    );
  }
}

ReactDOM.render(
  React.createElement(Hello, { toWhat: "World" }, null),
  document.getElementById("root")
);
