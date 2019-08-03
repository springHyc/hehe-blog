import React, { Component } from 'react';
import './App.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layouts from './layouts';
import PhotoWall from './photoWall';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* <Route path='/' render={props => <Layouts {...props} />} /> */}
                    <Route path='/' render={props => <PhotoWall {...props} />} />
                </Switch>
            </Router>
        );
    }
}

export default App;
