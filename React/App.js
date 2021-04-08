import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>React</h1>
    //   </div>
    // )
    
    // React runs this when building using JSX, it is compiled into refular JS
    return React.createElement('div', null, React.createElement('h1', null, 'React App!'));
  }
}

export default App;
