import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ViewQuestions from './ViewQuestions/ViewQuestions';
import CreateTest from './CreateTest/CreateTest';
import DashBoard from './Dashboard/Dashboard';
import Result from './Results/Results';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/admin" exact component={ DashBoard } />
                    <Route path="/admin/viewQuestions" component={ ViewQuestions } />
                    <Route path="/admin/createTest" component={ CreateTest } />
                    <Route path="/admin/results" component={ Result } />
                </Switch>
            </Router>
        )
    }
}

export default Routes;