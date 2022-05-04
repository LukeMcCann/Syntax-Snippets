import React, { useState } from 'react';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {

  const [name, setName] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  const uppercase = (str: string): string => (
    str[0].toUpperCase() + str.slice(1)
  );

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setName(inputValue);
    setInputValue('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  if (name === '') {
    return (
      <div className="App">
          <h1>Welcome to Snowpack!</h1>

          <form>
            <input type="text" value={inputValue} id="nameInput" onChange={handleChange} />
            <button onClick={handleClick}>Submit</button>
          </form>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Welcome {uppercase(name)}!</h1>

      <form>
        <input />
        <button>Submit</button>
      </form>

    </div>
  );
}
