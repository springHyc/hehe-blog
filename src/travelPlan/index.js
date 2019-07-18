import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'antd';
import TravelList from './travelList';
import ViewPoint from './viewPoint';
import './index.less';
import actions from '../actions';
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
        this.props.dispatch(actions.TravelPlan.fetchTravelPlanListStart());
    };

    render() {
        const { dataList, type } = this.props.travelPlan;
        return (
            <div>
                <h1>旅游规划</h1>
                <div className='travel-plan'>
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
                    </div>
                </div>
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
