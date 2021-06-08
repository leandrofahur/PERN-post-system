import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/dashboard" component={Layout}></Route>
        </Switch>
      </Router>

      <GlobalStyles />
    </>
  );
}

export default App;
