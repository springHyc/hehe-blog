export default [
    { title: '景点', dataIndex: 'title' },
    {
        title: '最佳游玩时间',
        dataIndex: 'bestTime'
    },
    {
        title: '交通方式',
        dataIndex: 'transportation'
    },
    {
        title: '小伙伴',
        dataIndex: 'partner'
    },
    {
        title: '是否已经去过',
        dataIndex: 'isGo',
        render: value => (value ? '是' : '否')
    },
    {
        title: '什么时候去的',
        dataIndex: 'whenDid',
        render: values => (values.length > 0 && `${values[0]}至${values[1]}`) || '无'
    }
];
