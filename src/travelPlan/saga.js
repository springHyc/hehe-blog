import { put, takeEvery } from 'redux-saga/effects';
import actions from '../actions/index';
import axios from 'axios';

function* fetchTravelPlanList() {
    try {
        const res = yield axios.get('/viewPoints');
        yield put(actions.fetchTravelPlanListSuccess(res.data));
    } catch (e) {
        yield put(actions.fetchTravelPlanListFailure(e));
    }
}

function* travelPlanSaga() {
    debugger;
    yield takeEvery(actions.FETCH_TRAVEL_PLAN_LIST_START, fetchTravelPlanList);
}

export default travelPlanSaga;
