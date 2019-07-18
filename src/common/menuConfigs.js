import React from 'react';
import TravelPlan from '../travelPlan';
import Introduction from '../introduction';
const menuConfigs = [
    {
        key: '/home',
        name: '首页',
        component: <Introduction />
    },
    {
        key: '/travelPlan',
        name: '旅游规划',
        component: <TravelPlan />
    }
];

export default menuConfigs;
