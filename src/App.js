import React from 'react';
import './App.less';
import TravelPlan from './travelPlan';

function App() {
    return (
        <div className='App'>
            <h1>Hehe's Blog</h1>
            <section style={{ textAlign: 'center' }}>
                <h2>旅游规划</h2>
                <TravelPlan />
            </section>
        </div>
    );
}

export default App;
