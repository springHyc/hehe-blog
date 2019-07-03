import React, { Component } from 'react';
import axios from 'axios';
import { Input, Button, message, DatePicker } from 'antd';
import moment from 'moment';
import Divider from 'antd/es/divider';
import 'antd/es/input/style/css';
import 'antd/es/button/style/css';
import 'antd/es/divider/style/css';
import 'antd/es/message/style/css';
import 'antd/es/date-picker/style/css';

function Item({ label, ...props }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <label style={{ marginRight: '10px' }}>{label}:</label>
            {props.children}
        </div>
    );
}

export default class TravelPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'TravelPlan',
            viewPoint: {},
            dataList: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios
            .get('/viewPoints')
            .then(response => {
                this.setState({ dataList: response.data });
                // console.log('获取到的', response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    save = () => {
        axios
            .post('/viewPoint', { data: this.state.viewPoint })
            .then(response => {
                message.success('添加成功！');
                this.setState({ viewPoint: {} }, () => this.fetchData());
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    delete = id => {
        axios.delete(`/viewPoint/${id}`).then(
            res => {
                this.fetchData();
                message.success('删除成功！');
            },
            () => message.error('删除失败！')
        );
    };

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <div>
                    <h2>添加想要去游玩的景点</h2>
                    <Item label='景点'>
                        <Input
                            value={
                                this.state.viewPoint &&
                                this.state.viewPoint.title
                            }
                            onChange={e => {
                                const viewPoint = this.state.viewPoint;
                                viewPoint.title = e.target.value;
                                this.setState({ viewPoint });
                            }}
                        />
                    </Item>
                    <Item label='游玩伙伴'>
                        <Input
                            value={
                                this.state.viewPoint &&
                                this.state.viewPoint.partner
                            }
                            onChange={e => {
                                const viewPoint = this.state.viewPoint;
                                viewPoint.partner = e.target.value;
                                this.setState({ viewPoint });
                            }}
                        />
                    </Item>
                    <Item label='最佳游玩时间'>
                        <DatePicker
                            value={moment(this.state.viewPoint.bestTime)}
                            onChange={(date, dateString) => {
                                const viewPoint = this.state.viewPoint;
                                viewPoint.bestTime = dateString;
                                this.setState({ viewPoint });
                            }}
                        />
                    </Item>
                    <Button onClick={this.save}>保存</Button>
                </div>
                <Divider dashed type='vertical' style={{ height: '100vh' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>景点列表</h2>
                    {this.state.dataList &&
                        this.state.dataList.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        margin: '10px 10px',
                                        justifyItems: 'center'
                                    }}
                                >
                                    <span>
                                        {item.title},想要和{item.partner || '-'}
                                        一起预计{item.bestTime || '-'}时间去！
                                    </span>

                                    <Button
                                        type='primary'
                                        onClick={() => {
                                            this.delete(item._id);
                                        }}
                                        style={{ margin: '0px 10px' }}
                                    >
                                        delete
                                    </Button>
                                    <Button
                                        type='primary'
                                        onClick={() => {
                                            this.setState({ viewPoint: item });
                                        }}
                                        style={{ margin: '0px 10px' }}
                                    >
                                        update
                                    </Button>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}
