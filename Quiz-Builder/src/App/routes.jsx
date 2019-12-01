import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './components/admin/admin';
import Login from './components/login/login';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/admin" component={Admin} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;