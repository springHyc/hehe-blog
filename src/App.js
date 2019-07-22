import React, { Component } from 'react';
import './App.less';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import store from './store/configStore';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class App extends Component {
    render() {
        // return (
        //     <Router>
        //         <Route path='/' exact render={props => <Home {...{ ...props, ...this.props }} />} />
        //     </Router>
        // );

        return (
            <Provider store={store}>
                <LocaleProvider locale={zh_CN}>
                    <Home />
                </LocaleProvider>
            </Provider>
        );
    }
}

export default App;
