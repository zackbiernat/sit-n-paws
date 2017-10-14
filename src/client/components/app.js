import React from 'react';
import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom';
import Home from './home.js';
import Main from './main.js';
import Login from './login.js';
import NotFound from './notfound.js';
import PrivateRoute from './private.js';
import jwt from 'jsonwebtoken';

// App is the top level component that links to the other component
// and is where the router is located.
export default class App extends React.Component {
  constructor(props) {
    super(props);

    // USING JWT AUTHENTICATION: Checks for current existence of a json web token
    // Returns true if found, false if not.
    // Can be decoded to extract username and expiration date for stricter login validation
    // Token becomes null upon logout
    this.authLogin = () => {
      let token = localStorage.getItem('jwt');
      if (token !== "undefined" && token !== null && token !== undefined) {
        return true;
      } else {
        return false;
      }
    }
  }

  // if checkAuth is true, then allow access to /main
  render() {
    return(
      <Main />
    )
  }
}
    // <BrowserRouter history={browserHistory}>
    //   <Switch>
    //     <Route exact path='/' component={Main}/>
    //     <Route path='/login' render={(props) => (
    //       <Login {...props}
    //       handleLogin={this.authLogin}
    //       />
    //       )}/>
    //     <PrivateRoute path='/main' checkAuth={this.authLogin} component={Main}/>
    //     <Route component={NotFound}/>
    //   </Switch>
    // </BrowserRouter>
