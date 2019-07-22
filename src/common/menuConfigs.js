import React from 'react';
import AsyncCompnent from './HighOrderComponents/asyncComponent';

const TravelPlan = AsyncCompnent(() => import('../travelPlan'));
const Introduction = AsyncCompnent(() => import('../introduction'));
const ViewPoint = AsyncCompnent(() => import('../travelPlan/viewPoint'));

const menuConfigs = [
    {
        key: 'Home',
        path: '/home',
        show: true,
        name: '首页',
        component: Introduction
    },
    {
        key: 'TravelPlan',
        path: '/travelPlan',
        show: true,
        name: '旅游规划',
        component: TravelPlan
    },
    {
        key: 'AddViewPoint',
        path: '/addViewPoint',
        show: false,
        name: '新增旅游规划',
        component: ViewPoint
    }
];

export default menuConfigs;

// export default function MenuConfigs(props) {
//     return [
//         {
//             key: '#home',
//             show: true,
//             name: '首页',
//             component: <Introduction {...props} />
//         },
//         {
//             key: '#travelPlan',
//             show: true,
//             name: '旅游规划',
//             component: <TravelPlan {...props} />
//         },
//         {
//             key: '#addViewPoint',
//             show: false,
//             name: '新增旅游规划',
//             component: <ViewPoint {...props} />
//         },
//         {
//             key: '#editViewPoint',
//             show: false,
//             name: '新增旅游规划',
//             component: <ViewPoint {...props} />
//         }
//     ];
// }
