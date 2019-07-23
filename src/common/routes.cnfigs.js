import AsyncCompnent from './HighOrderComponents/asyncComponent';
const TravelPlan = AsyncCompnent(() => import('../travelPlan'));
const Introduction = AsyncCompnent(() => import('../introduction'));
const ViewPoint = AsyncCompnent(() => import('../travelPlan/viewPoint'));

/**
 * {
        key: 'Home', // key
        path: '/home', // 路由
        show: true, // 是否在layout中的menu中展示
        name: '首页', // 在layout中的menu中展示的名字
        component: Introduction // 组件名
    },
 */
const ROUTES = [
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
    },
    {
        key: 'EditViewPoint',
        path: '/editViewPoint',
        show: false,
        name: '修改旅游规划',
        component: ViewPoint
    }
];

export default ROUTES;
