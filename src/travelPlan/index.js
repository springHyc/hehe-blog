import React, { Component } from 'react';
import axios from 'axios';
import { Divider, Button } from 'antd';
import TravelList from './travelList';
import ViewPoint from './viewPoint';
import './index.less';

export default class TravelPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            editViewPoint: {}
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
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    getImages = () => {
        axios
            .get('/viewPoint/pohots/5d204432f6784ee965558105')
            .then(response => {
                this.setState({ imgData: response.data });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className='travel-plan'>
                <div style={{ flex: 1 }}>
                    <h2>添加想要去游玩的景点</h2>
                    <ViewPoint
                        fetchList={() => this.fetchData()}
                        viewPoint={this.state.editViewPoint}
                    />
                </div>
                <Divider dashed type='vertical' style={{ height: '100vh' }} />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 2
                    }}
                >
                    <h2>景点列表</h2>
                    <TravelList
                        dataList={this.state.dataList}
                        fetchList={() => this.fetchData()}
                        update={viewPoint => {
                            this.setState({ editViewPoint: viewPoint });
                        }}
                    />
                    <Button type='primary' onClick={this.getImages}>
                        show image
                    </Button>
                    {/* <img alt='图片' src={this.state.imgData} /> */}
                </div>
            </div>
        );
    }
}
