import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Input, Form, DatePicker, message, Icon, Upload, Modal, Button } from 'antd';
import axios from 'axios';
import './index.less';

class ViewPoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            preProps: {
                viewPoint: { _id: undefined }
            },
            isEdit: false
        };
    }
    componentWillReceiveProps(nextProps) {
        let _fileList = [];
        if (nextProps.viewPoint && nextProps.viewPoint._id !== this.state.preProps.viewPoint._id) {
            nextProps.viewPoint &&
                nextProps.viewPoint.imgIds &&
                nextProps.viewPoint.imgIds.map(item => {
                    _fileList.push({
                        uid: '-1',
                        name: 'xxx.png',
                        status: 'done',
                        url: 'http://127.0.0.1:4321' + item
                    });
                });
            this.setState({ preProps: nextProps, fileList: _fileList, isEdit: true });
        }
    }
    save = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const data = {
                    ...values,
                    bestTime: moment(values.bestTime).format('YYYY-MM-DD')
                };
                if (this.props.viewPoint._id) {
                    data._id = this.props.viewPoint._id;
                }
                axios
                    .post('/api/viewPoint', { data })
                    .then(() => {
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
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await this.getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true
        });
    };

    handleChange = ({ fileList }) => {
        this.setState({ fileList });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        let { viewPoint } = this.props;
        const uploadButton = (
            <div>
                <Icon type='plus' />
                <div className='ant-upload-text'>Upload</div>
            </div>
        );

        const { previewVisible, previewImage, fileList, isEdit } = this.state;
        return (
            <div>
                <Form>
                    <Form.Item label='景点' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ display: 'flex' }}>
                        {getFieldDecorator('title', {
                            initialValue: viewPoint.title || undefined
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label='最佳游玩时间' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ display: 'flex' }}>
                        {getFieldDecorator('bestTime', {
                            initialValue: moment(viewPoint.bestTime) || undefined
                        })(<DatePicker />)}
                    </Form.Item>
                    <Form.Item label='交通方式' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ display: 'flex' }}>
                        {getFieldDecorator('transportation', {
                            initialValue: viewPoint.transportation || undefined
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label='小伙伴' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ display: 'flex' }}>
                        {getFieldDecorator('partner', {
                            initialValue: viewPoint.partner || undefined
                        })(<Input />)}
                    </Form.Item>
                    {isEdit && (
                        <Form.Item label='照片墙' labelCol={{ span: 8 }} wrapperCol={{ span: 20 }} style={{ display: 'flex' }}>
                            <div className='clearfix'>
                                <Upload
                                    action={`/api/viewPoint/photo/upload?id=${this.props.viewPoint._id}`}
                                    listType='picture-card'
                                    fileList={fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                >
                                    {fileList.length >= 3 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                    <img alt='example' style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </Form.Item>
                    )}
                </Form>

                <Button onClick={this.save} className='btn'>
                    保存
                </Button>
                <Button
                    onClick={() => {
                        this.setState({ isEdit: true, fileList: [] });
                    }}
                    className='btn'
                >
                    重新添加
                </Button>
            </div>
        );
    }
}

export default Form.create()(ViewPoint);
