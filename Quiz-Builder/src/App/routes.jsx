import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './components/admin/admin';
import Login from './components/login/login';
import User from './components/user/user';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/user" component={User} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;