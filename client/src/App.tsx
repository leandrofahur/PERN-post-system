import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import GlobalStyles from './styles/GlobalStyles';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const setAuth = (bool: boolean) => {
    setIsAuthenticated(bool);
  };

  const isAuth = async () => {
    try {
      console.log(isAuthenticated);
      // const token = localStorage.getItem("user_id");
      // // const response = await UserService.verify(token);
      // // setAuth(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={(props) =>
              !isAuthenticated ? (
                <Login
                  setAuth={setAuth}
                  username={username}
                  setUsername={setUsername}
                />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            render={(props) =>
              isAuthenticated ? (
                <Layout {...props} setAuth={setAuth} username={username} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </Router>

      <GlobalStyles />
    </>
  );
}

export default App;
