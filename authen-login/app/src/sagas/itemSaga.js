import { actions } from '../actions'
import { put, takeEvery } from "redux-saga/effects";

import * as types from '../constants'
import callApi from '../fetchAPIs/callAPI'

function* getListItem() {
    try {
        const res = yield callApi('GET', '/student')
        yield put(actions.getStudentSuccess(
            { listStudent: res.listStudent }
        ))
    } catch (error) {
        yield put(actions.getStudentFailure({
            errorMessage: 'get that bai'
        }))
    }
}
function* addItem(data) {
    try {
        const res = yield callApi('POST', '/student', data.payload)
        yield put(actions.addStudentSuccess(res))
        yield put(actions.getStudentRequest())
    } catch (error) {
        yield put(actions.addStudentFailure({ errorMessage: 'add that bai' }))
    }
}
function* delItem(data) {
    try {
        yield callApi('DELETE', `/student/${data.payload.id}`)
        yield put(actions.deleteStudentSuccess())
        yield put(actions.getStudentRequest())
    } catch (error) {
        yield put(actions.deleteStudentFailure({ errorMessage: 'add that bai' }))
    }
}
function* updateItem(data) {
    try {
        yield callApi('PUT', `/student/${data.payload.id}`, { name: data.payload.nameUpdate })
        yield put(actions.updateStudentSuccess())
        yield put(actions.getStudentRequest())
    } catch {
        yield put(actions.updateStudentFailure({ errorMessage: 'update that bai' }))
    }
}
function* searchItem(data) {
    try {
        const res = yield callApi('GET', `/student/search?textSearch=${data.payload.nameSearch}`)
        yield put(actions.searchSuccess({
            searchStudent: res.search
        }))
    } catch (error) {
        yield put(actions.searchFailure({ errorMessage: error.Message }))
    }
}

function* signUp(data) {
    console.error('single sign');
    try {
        const res = yield callApi('POST', `/register`, { userName: data.payload.userName, password: data.payload.password })
        if (res.messageFailure) {
            alert(res.messageFailure)
        } else {
            yield put(actions.signUpSuccess())
            alert('Đăng ký thành công')
           // window.location.href = '/'
        }
    } catch (error) {
        yield put(actions.signUpFailure())
    }
}
function* logIn(data) {
    try {
        const res = yield callApi('POST', `/login`, data.payload)
        if (res.userNameErrMess) {
            alert(res.userNameErrMess)
        } else if (res.passwordErrMess) {
            alert(res.passwordErrMess)
        } else {
            yield put(actions.loginStudentSuccess())
            localStorage.setItem('token', res.token)
            localStorage.setItem('role', res.role)
            window.location.reload()
        }
    } catch (error) {
        yield put(actions.loginStudentFailure)
    }
}

export const ItemSaga = [
    takeEvery(types.GET_STUDENT_REQUEST, getListItem),
    takeEvery(types.ADD_STUDENT_REQUEST, addItem),
    takeEvery(types.DELETE_STUDENT_REQUEST, delItem),
    takeEvery(types.UPDATE_STUDENT_REQUEST, updateItem),
    takeEvery(types.SEARCH_REQUEST, searchItem),
    takeEvery(types.SIGN_UP_REQUEST, signUp),
    takeEvery(types.LOGIN_REQUEST, logIn)]