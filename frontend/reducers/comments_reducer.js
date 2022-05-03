import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (state={},action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        //removed RECEIVE_PRODUCT
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            debugger
            nextState[action.comments.id] = action.comment
            debugger
            return nextState;
        default:
            return (state);
    }
}

export default commentsReducer;