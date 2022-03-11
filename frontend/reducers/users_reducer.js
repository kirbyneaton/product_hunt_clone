import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PRODUCT} from '../actions/product_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
            return nextState;
        case RECEIVE_COMMENT:
            nextState[action.user.id] = action.user
            return nextState;
        default:
            return state;
    }
};

export default usersReducer;