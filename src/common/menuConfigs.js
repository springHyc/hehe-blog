import React from 'react';
import TravelPlan from '../travelPlan';
import Introduction from '../introduction';
import ViewPoint from '../travelPlan/viewPoint';

const menuConfigs = [
    {
        key: '/home',
        show: true,
        name: '首页',
        component: <Introduction />
    },
    {
        key: '/travelPlan',
        show: true,
        name: '旅游规划',
        component: <TravelPlan />
    },
    {
        key: '#addViewPoint',
        show: false,
        name: '新增旅游规划',
        component: <ViewPoint />
    }
];

export default function MenuConfigs(props) {
    return [
        {
            key: '#home',
            show: true,
            name: '首页',
            component: <Introduction {...props} />
        },
        {
            key: '#travelPlan',
            show: true,
            name: '旅游规划',
            component: <TravelPlan {...props} />
        },
        {
            key: '#addViewPoint',
            show: false,
            name: '新增旅游规划',
            component: <ViewPoint {...props} />
        },
        {
            key: '#editViewPoint',
            show: false,
            name: '新增旅游规划',
            component: <ViewPoint {...props} />
        }
    ];
}
