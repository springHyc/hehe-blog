import React, { Component } from 'react';
import './App.less';
import TravelPlan from './travelPlan';
import ViewPoint from './travelPlan/viewPoint';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav';
import Introduction from './introduction';
import Home from './home';

class App extends Component {
    render() {
        return (
            <Router>
                {/* <Nav /> */}
                <Switch>
                    <Route path='/' exact render={props => <Home {...{ ...props, ...this.props }} />} />
                    <Route path='/home' component={Introduction} />
                    <Route path='/travelPlan' exact component={TravelPlan} />
                </Switch>
            </Router>
        );
    }
}

export default App;
