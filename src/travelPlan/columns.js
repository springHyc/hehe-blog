export default [
    { title: '景点', dataIndex: 'title', width: 120 },
    {
        title: '最佳游玩时间',
        dataIndex: 'bestTime',
        width: 120
    },
    {
        title: '交通方式',
        dataIndex: 'transportation',
        width: 120
    },
    {
        title: '小伙伴',
        dataIndex: 'partner',
        width: 150
    },
    {
        title: '去过',
        dataIndex: 'isGo',
        width: 60,
        render: value => (value ? '是' : '否')
    },
    {
        title: '什么时候去的',
        dataIndex: 'whenDid',
        width: 200,
        render: values => (values.length > 0 && `${values[0]}-${values[1]}`) || '无'
    }
];
