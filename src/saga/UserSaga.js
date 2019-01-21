import {put, call, takeEvery} from 'redux-saga/effects'

import * as UserApi from '../api/UserApi'
import ACTION_TYPES from '../ACTION_TYPES'

export function* fetchUserData(action) {
    try {

        const response = yield call(UserApi.getUsers);

        yield put({
            type: ACTION_TYPES.UI_ACTION.ON_USERS_DATA,
            data: response.data
        });
    } catch (e) {
        console.error("user request failed");
        yield put({
            type: ACTION_TYPES.UI_ACTION.ON_USERS_DATA,
            error: e
        });
    }
}

export function* watchUserData() {
    yield takeEvery(
        ACTION_TYPES.UI_ACTION.FETCH_USERS,
        fetchUserData
    );
}
