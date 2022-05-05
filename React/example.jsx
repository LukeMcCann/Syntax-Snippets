// When using reacts useState, when we call the set function,
// we set off an Asyncronous function call which is added to a callback queue.

// React batches these calls so that it can work out the most optimal way to re-render.
// we show this here by logging out the state directly after updating it, you will
// see that although our state updates correctly, the log will log out the old state.

import React, { useState } from 'react';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {

  const [name, setName] = useState<string>('World');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setName('Luke');
    console.log(name); // logs: 'World'
  };

  return (
    <React.Fragment>
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>Click Me!</button>
    </React.Fragment>

  );
}
