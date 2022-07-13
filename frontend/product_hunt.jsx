import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from "./store/store";
import * as SessionApiUtil from './util/session_api_util'
import * as ProductApiUtil from './util/product_api_util'
import * as CommentApiUtil from './util/comment_api_util'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };
    ReactDOM.render(<Root store={ store } />, root);

    // just for testing!
    window.signup = SessionApiUtil.signup
    window.login = SessionApiUtil.login
    window.logout = SessionApiUtil.logout
    window.fetchProducts = ProductApiUtil.fetchProducts
    window.fetchProduct = ProductApiUtil.fetchProduct
    window.fetchProductComments = CommentApiUtil.fetchProductComments

    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    window.currentUser = store.currentUser;

});