import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from "../actions/product_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const productsReducer = (state={},action) => {
    state = Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            // debugger
            return action.products;
        case RECEIVE_PRODUCT:
            // debugger
            nextState[action.product.id] = action.product
            return (nextState);
        case REMOVE_PRODUCT:
            delete nextState[action.productId]
            return (nextState);
        case RECEIVE_COMMENT:
            // debugger
            nextState[action.comment.product_id].comments.push(action.comment);
            // debugger
            return nextState;
        case REMOVE_COMMENT:
            // debugger

            nextState[action.productId].comments.filter(comment => (comment.id !== action.commentId));
        
            // debugger
            return (nextState);
        default:
            return (state);
    }
}

export default productsReducer;