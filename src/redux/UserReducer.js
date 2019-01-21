import ACTION_TYPES from '../ACTION_TYPES';

const initialState = {
    userList: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.UI_ACTION.ON_USERS_DATA:
            return Object.assign({}, state, {userList: action.data});
        default:
            return state;
    }
}