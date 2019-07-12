import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Divider, Button } from 'antd';
import TravelList from './travelList';
import ViewPoint from './viewPoint';
import './index.less';
import { fetchTravelPlanListStart } from '../actions/travelPlan';
import LoadingHit from '../common/loadingHint';

class TravelPlan extends Component {
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
        // axios
        //     .get('/viewPoints')
        //     .then(response => {
        //         this.setState({ dataList: response.data });
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
        this.props.dispatch(fetchTravelPlanListStart());
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
        const { dataList, type } = this.props.travelPlan;
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
                    <LoadingHit type={type}>
                        <TravelList
                            dataList={dataList}
                            fetchList={() => this.fetchData()}
                            update={viewPoint => {
                                this.setState({ editViewPoint: viewPoint });
                            }}
                        />
                    </LoadingHit>

                    <Button type='primary' onClick={this.getImages}>
                        show image
                    </Button>
                    {/* <img alt='图片' src={this.state.imgData} /> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    dispatch
});

const TravelPlanContanier = connect(
    mapStateToProps,
    mapDispatchToProps
)(TravelPlan);

export default TravelPlanContanier;
