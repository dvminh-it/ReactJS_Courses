import { put, takeLatest } from "@redux-saga/core/effects";
import { actions } from "../actions"
import * as types from '../constant';
import * as API from "../api"

function* getUser() {
    try {
        const res = yield API.getApi()
        yield put(actions.getSuccess(res));
    } catch (err) {
        yield put(actions.getFailure());
    }
}

function* addUser(payload) {
    try {
        yield API.addApi(payload)
        yield put(actions.addSuccess());
        yield put(actions.getRequest());
    } catch (err) {
        yield put(actions.addFailure());
    }
}

function* deleteUser(payload){
    try {
        yield API.deleteApi(payload)
        yield put(actions.deleteSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.deleteFailure(error))
    }
}
export default function* userSaga() {
    yield takeLatest(types.GET_REQUEST, getUser);
    yield takeLatest(types.ADD_REQUEST, addUser);
    yield takeLatest(types.DELETE_REQUEST, deleteUser);
}