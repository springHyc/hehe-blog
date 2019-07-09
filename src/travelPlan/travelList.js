import React, { Component } from 'react';
import { LocaleProvider, Table, Button, message } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import columns from './columns';
import axios from 'axios';
import './index.css';

export default class TravelList extends Component {
    getColumns = () =>
        columns.concat([
            {
                title: '操作',
                dataIndex: 'action',
                render: (value, record) => {
                    return (
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
                                    this.props.update(record);
                                }}
                                className='table_btn'
                            >
                                更新
                            </Button>
                        </div>
                    );
                }
            }
        ]);
    delete = id => {
        axios.delete(`/viewPoint/${id}`).then(
            res => {
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
