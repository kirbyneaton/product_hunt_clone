import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";

const uiReducer = combineReducers({
    ui: modalReducer
});

export default uiReducer;