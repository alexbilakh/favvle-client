import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Login from './auth/Login';
import Signup from './auth/Signup';

export default function App() {
    return(
        <Router>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/signup" component={Signup} />
                <Redirect to="/login" />
            </Switch>
        </Router>
    );
}