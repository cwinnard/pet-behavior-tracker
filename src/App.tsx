import { createTheme , ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './store/createStore';
import BottomMenu from './BottomMenu';
import Home from './views/Home';
import PetOverview from './views/PetOverview';
import Profile from './views/Profile';

import './styles/main.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#390099'
    },
    secondary: {
      main: '#ff5400'
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={createStore()}>
        <div className="app-background">
          <div className="app-container">
            <BrowserRouter>
              <div className="app-main">
                <Link to="/">Link 1</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/dog/1">Overview</Link>

                <Route path="/" exact={true} component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/dog/:id" component={PetOverview} />
              </div>
            </BrowserRouter>
            <BottomMenu />
          </div>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
