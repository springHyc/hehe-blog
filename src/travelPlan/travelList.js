import React, { Component } from 'react';
import LocaleProvider from 'antd/es/locale-provider';
import 'antd/es/locale-provider/style/css';
import zhCN from 'antd/es/locale-provider/zh_CN';
import Table from 'antd/es/table';
import 'antd/es/table/style/css';
import columns from './columns';
import Button from 'antd/es/button';
import 'antd/es/button/style/css';
import axios from 'axios';
import { message } from 'antd';
import 'antd/es/message/style/css';
import './index.css';

export default class TravelList extends Component {
    // constructor(props) {
    //     super(props);
    // }

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
