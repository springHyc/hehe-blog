import React, { Component } from 'react';
import { LocaleProvider, Table, Button, message, Upload } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import columns from './columns';
import axios from 'axios';
import './index.less';
let _fileList = [];

export default class TravelList extends Component {
    constructor(props) {
        super(props);
    }
    getColumns = () =>
        columns.concat([
            {
                title: '照片墙掠影',
                dataIndex: 'imgIds',
                render: (values, record) => {
                    _fileList = values.map((item, index) => ({
                        uid: index,
                        name: item,
                        status: 'done',
                        url: 'http://127.0.0.1:4321' + item
                    }));
                    return (
                        <Upload
                            action={`/api/viewPoint/photo/upload?id=${record._id}`}
                            listType='picture-card'
                            fileList={_fileList}
                            onChange={({ fileList }) => {
                                _fileList = fileList;
                            }}
                            onRemove={file => {
                                axios.delete(`/api/viewPoint/photo/${record._id}`, { params: { url: file.name } }).then(
                                    () => {
                                        this.props.fetchList();
                                        message.success('删除成功！');
                                    },
                                    () => message.success('删除失败！')
                                );
                            }}
                        />
                    );
                }
            },
            {
                title: '操作',
                dataIndex: 'action',
                render: (value, record) => (
                    <div>
                        <Button
                            ghost
                            type='primary'
                            onClick={() => {
                                this.delete(record._id);
                            }}
                            className='table_btn'
                        >
                            删除
                        </Button>
                        <Button
                            ghost
                            type='primary'
                            onClick={() => {
                                // this.props.history.push(`#editViewPoint?viewPoint=${record}`);
                            }}
                            className='table_btn'
                        >
                            修改
                        </Button>
                    </div>
                )
            }
        ]);
    delete = id => {
        axios.delete(`/api/viewPoint/${id}`).then(
            () => {
                this.props.fetchList();
                message.success('删除成功！');
            },
            () => message.error('删除失败！')
        );
    };
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Table
                    rowKey={(row, index) => `${index}-${row.id}`}
                    columns={this.getColumns()}
                    dataSource={this.props.dataList}
                    locale={{ emptyText: '暂无数据' }}
                    pagination={false}
                    scroll={{ x: true }}
                />
            </LocaleProvider>
        );
    }
}
