import AsyncCompnent from './HighOrderComponents/asyncComponent';
const TravelPlan = AsyncCompnent(() => import('../travelPlan'));
const Introduction = AsyncCompnent(() => import('../introduction'));
const ViewPoint = AsyncCompnent(() => import('../travelPlan/viewPoint'));
const PhotoWall = AsyncCompnent(() => import('../photoWall'));

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
        iconType: 'home',
        component: Introduction
    },
    {
        key: 'TravelPlan',
        path: '/travelPlan',
        show: true,
        name: '旅游规划',
        iconType: 'ordered-list',
        component: TravelPlan
    },
    {
        key: 'AddViewPoint',
        path: '/addViewPoint',
        show: false,
        name: '新增',
        component: ViewPoint
    },
    {
        key: 'EditViewPoint',
        path: '/editViewPoint',
        show: false,
        name: '修改',
        component: ViewPoint
    }
    // {
    //     key: 'PhotoWall',
    //     path: '/photowall',
    //     show: false,
    //     name: '照片墙',
    //     component: PhotoWall
    // }
];

export default ROUTES;
