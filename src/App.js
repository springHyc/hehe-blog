import React, { Component } from 'react';
import './App.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
