import React from 'react';
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';
import './App.css';

import List from "./components/list";
import Login from "./components/login";


function App(props) {

    const history = useHistory();

    const login = (token) => {
        localStorage.setItem('token', token);
        history.push('/list');
    }

    const logout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }

    return (
        <AuthContext.Provider value={ () => localStorage.getItem('token') }>
            <React.Fragment>
                <Switch>
                    <Redirect exact from='/' to='/list'></Redirect>
                    <Route
                        path='/login'
                        render={(props) => <Login {...props} login={login} />}
                    />
                    <PrivateRoute path="/list" component={List} logout={logout} />
                </Switch>
            </React.Fragment>
        </AuthContext.Provider>
    );
}

export default App;