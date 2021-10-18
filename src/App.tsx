import React from 'react';
import logo from './logo.svg';
import './App.css';

import BottomMenu from './BottomMenu';

import user from './data/user.json';
import dogs from './data/dogs.json'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Hello {user.name}
        </div>
        <p>
          Your Dogs
        </p>
        <div>
          {dogs.map((dog) => (
            <p>
              {dog.name}
            </p>
          ))}
        </div>
      </header>
      <BottomMenu />
    </div>
  );
}

export default App;
