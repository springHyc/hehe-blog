import React, { Component } from 'react';
import './App.less';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';

class App extends Component {
    render() {
        return (
            <Router>
                <Route path='/' exact render={props => <Home {...{ ...props, ...this.props }} />} />
            </Router>
        );
    }
}

export default App;
