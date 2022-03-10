import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const nullUser = Object.freeze({
    id: null
})

const sessionReducer = (state = nullUser, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
            // nextState[action.currentUser.id] = action.currentUser
            // return (nextState);
        case LOGOUT_CURRENT_USER:
            return (nullUser);
        default:
            return (state);
    }
};

export default sessionReducer;