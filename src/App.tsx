import { BrowserRouter, Route, Link } from "react-router-dom";

import BottomMenu from './BottomMenu';
import Home from './views/Home';
import PetOverview from './views/PetOverview';
import Profile from './views/Profile';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Link 1</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/dog/1">Overview</Link>
        </div>
        <Route path="/" exact={true} component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/dog/:id" component={PetOverview} />
      </BrowserRouter>
      <BottomMenu />
    </div>
  );
}

export default App;
