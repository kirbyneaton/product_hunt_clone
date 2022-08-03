import { RECEIVE_SEARCH } from "../actions/search";

const searchReducer = (state={}, action) => {
  state = Object.freeze(state);
  // let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SEARCH:
      return action.query;
    default:
      return state;
  }
}

export default searchReducer;