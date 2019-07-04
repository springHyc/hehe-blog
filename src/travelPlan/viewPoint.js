import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Input, Form, DatePicker, message } from 'antd';
import 'antd/es/form/style/css';
import 'antd/es/input/style/css';
import 'antd/es/button/style/css';
import 'antd/es/divider/style/css';
import 'antd/es/message/style/css';
import 'antd/es/date-picker/style/css';
import { Button } from 'antd/es/radio';
import axios from 'axios';

class ViewPoint extends Component {
    save = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const data = {
                    ...values,
                    bestTime: moment(values.bestTime).format('YYYY-MM-DD')
                };
                axios
                    .post('/viewPoint', { data })
                    .then(response => {
                        this.props.form.resetFields();
                        message.success('添加成功！');
                        this.props.fetchList();
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { viewPoint } = this.props;
        return (
            <div>
                <Form>
                    <Form.Item
                        label='景点'
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ display: 'flex' }}
                    >
                        {getFieldDecorator('title', {
                            initialValue: viewPoint.title || undefined
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item
                        label='最佳游玩时间'
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ display: 'flex' }}
                    >
                        {getFieldDecorator('bestTime', {
                            initialValue: moment(viewPoint.bestTime) || moment()
                        })(<DatePicker />)}
                    </Form.Item>
                    <Form.Item
                        label='交通方式'
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ display: 'flex' }}
                    >
                        {getFieldDecorator('transportation', {
                            initialValue: viewPoint.transportation || undefined
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item
                        label='小伙伴'
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ display: 'flex' }}
                    >
                        {getFieldDecorator('partner', {
                            initialValue: viewPoint.partner || undefined
                        })(<Input />)}
                    </Form.Item>
                </Form>

                <Button onClick={this.save}>保存</Button>
            </div>
        );
    }
}

export default Form.create()(ViewPoint);
