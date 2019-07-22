import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Button } from 'antd';
import TravelList from './travelList';
import ViewPoint from './viewPoint';
import './index.less';
import actions from '../actions';
import LoadingHit from '../common/loadingHint';
import { Link } from 'react-router-dom';

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
        this.props.dispatch(actions.TravelPlan.fetchTravelPlanListStart());
    };
    addViewPoint = () => {};

    render() {
        const { dataList, type } = this.props.travelPlan;
        return (
            <div>
                <div className='title_block'>
                    <h1 style={{ color: 'brown' }}>旅游规划</h1>
                    <div className='btn'>
                        <Button type='primary'>
                            <Link to={{ pathname: '/addViewPoint', state: { a: 21 } }}>新增</Link>
                        </Button>
                    </div>
                </div>
                <LoadingHit type={type}>
                    <TravelList
                        dataList={dataList}
                        fetchList={() => this.fetchData()}
                        update={viewPoint => {
                            this.setState({ editViewPoint: viewPoint });
                        }}
                    />
                </LoadingHit>
                {/* <div className='travel-plan'>
                    <div style={{ flex: 1 }}>
                        <h2>添加想要去游玩的景点</h2>
                        <ViewPoint fetchList={() => this.fetchData()} viewPoint={this.state.editViewPoint} />
                    </div>
                    <Divider dashed type='vertical' style={{ height: '100vh' }} />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 2
                        }}
                    >
                        <LoadingHit type={type}>
                            <TravelList
                                dataList={dataList}
                                fetchList={() => this.fetchData()}
                                update={viewPoint => {
                                    this.setState({ editViewPoint: viewPoint });
                                }}
                            />
                        </LoadingHit>
                    </div>
                </div>
            */}
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    dispatch
});

const TravelPlanContanier = connect(
    mapStateToProps,
    mapDispatchToProps
)(TravelPlan);

export default TravelPlanContanier;
