import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Dracula",
          id: "1231",
        },
        {
          name: "Frankenstein",
          id: "1232",
        },
        {
          name: "Zombie",
          id: "1233",
        }
      ]
    }
  }

  render() {
    return (
      // When returning a list of elements react will
      // complaing if there is no unique key prop
      // for each item returned
      // "Warning: Each child in a list should have a unique "key" prop."
      
      // To resolve this we add a unique key prop to each child we return.
      // It is not recommended to use an index as this key prop, unless the array
      // is static as react uses this to determine when to re-render components. 
      // It is worth noting that the unique key prop need only be unique in
      // regard to it's sibling elements.
      
      // React needs to know this in order to decide whcich element to re-render when
      // a change occurs.
      <div className="App">
        {
          this.state.monsters.map(monster => <h1>{ monster.name }</h1>)
        }
      </div>
    );
  }
}

export default App;
