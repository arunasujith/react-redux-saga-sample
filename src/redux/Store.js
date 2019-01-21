import {createStore, applyMiddleware, compose, combineReducers} from "redux";

import createSagaMiddleware from "redux-saga";
import {appMainSaga} from "../saga/MainSaga";


import userReducer from "./UserReducer";


const loadState = (key) => {
    try {
        const serializedStage = localStorage.getItem(key);
        if (serializedStage === null) {
            return undefined;
        }
        return JSON.parse(serializedStage)
    } catch (err) {
        return undefined;
    }
};

const saveState = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (e) {
    }
};


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const combinedReducer = combineReducers({userActions: userReducer});
const persistedState = loadState('state');

const enhancer = compose(applyMiddleware(...middleware));

const store = createStore(combinedReducer, persistedState, enhancer);
store.subscribe(() => {
    saveState('state', store.getState());
});
window.store_ref = store;

sagaMiddleware.run(appMainSaga);

export default {
    store
};
