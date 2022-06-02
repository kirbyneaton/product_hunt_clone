import { RECEIVE_COMMENT_ERRORS, REMOVE_ERRORS } from '../actions/comment_actions';

// errors is array
const commentErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      return [];  
    default:
      return state;
  }
};

export default commentErrorsReducer;