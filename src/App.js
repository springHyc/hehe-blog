import React from 'react';
import './App.less';
import TravelPlan from './travelPlan';
import { Provider } from 'react-redux';
import store from './store/configStore';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <h1>Hehe's Blog</h1>
                <section style={{ textAlign: 'center' }}>
                    <h2>旅游规划</h2>
                    <TravelPlan />
                </section>
            </div>
        </Provider>
    );
}

export default App;
