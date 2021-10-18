import { BrowserRouter, Route, Link } from "react-router-dom";

import BottomMenu from './BottomMenu';

import user from './data/user.json';
import dogs from './data/dogs.json'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
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
      <BrowserRouter>
        <div>
          <Link to="/">Link 1</Link>
          <Link to="/dog">Link 2</Link>
        </div>
      </BrowserRouter>
      <BottomMenu />
    </div>
  );
}

export default App;
