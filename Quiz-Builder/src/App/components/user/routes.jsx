import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './Test/Test';
import TestKey from './TestKey/TestKey';
import Submitted from './Submitted/Submitted'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/user" exact component={ TestKey } />
                    <Route path="/user/test" component={ Test } />
                    <Route path="/user/submitted" component={ Submitted } />
                </Switch>
            </Router>
        )
    }
}

export default Routes;