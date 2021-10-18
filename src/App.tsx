import { BrowserRouter, Route, Link } from "react-router-dom";

import BottomMenu from './BottomMenu';
import Home from './views/Home';
import Profile from './views/Profile';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Link 1</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </BrowserRouter>
      <BottomMenu />
    </div>
  );
}

export default App;
