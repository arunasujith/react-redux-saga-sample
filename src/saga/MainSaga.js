import {all} from 'redux-saga/effects';
import * as UserSaga from './UserSaga';


export function* appMainSaga() {
    yield all([
        UserSaga.watchUserData()
    ]);
}