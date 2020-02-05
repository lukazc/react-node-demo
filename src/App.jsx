import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import List from "./components/list";
// import Login from "./components/login";

class App extends Component {
    render() {
        return (
          <React.Fragment>
              <Switch>
                  <Route exact path = "/" component = { List } />
                  {/* <Route exact path = "/login" component = { Login } /> */}
              </Switch>
          </React.Fragment>
        );
    }
}

export default App;
