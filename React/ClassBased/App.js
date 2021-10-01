import "./styles.css";
import React, { Component } from "react";
import { Hello } from "./components/hello/hello.component";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Hello toWho="World" />
      </div>
    );
  }
}


export default App;
