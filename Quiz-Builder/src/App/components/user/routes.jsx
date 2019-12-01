import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './Test/Test';
import TestKey from './TestKey/TestKey';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/user" exact component={ TestKey } />
                    <Route path="/user/test" component={ Test } />
                </Switch>
            </Router>
        )
    }
}

export default Routes;