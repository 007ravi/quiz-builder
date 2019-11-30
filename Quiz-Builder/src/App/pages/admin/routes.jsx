import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ViewQuestions from './ViewQuestions/ViewQuestions';
import CreateTest from './CreateTest/CreateTest';
import DashBoard from './Dashboard/Dashboard';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/admin" exact component={ DashBoard } />
                    <Route path="/admin/viewQuestions" exact component={ ViewQuestions } />
                    <Route path="/admin/createTest" exact component={ CreateTest } />
                </Switch>
            </Router>
        )
    }
}

export default Routes;