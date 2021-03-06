import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer";
import commentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    comments: commentsReducer
});

export default entitiesReducer;