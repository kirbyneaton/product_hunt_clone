import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from "./store/store";
import * as SessionApiUtil from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<Root store={ store} />, root);

    // just for testing!
    window.signup = SessionApiUtil.signup
    window.login = SessionApiUtil.login
    window.logout = SessionApiUtil.logout

    window.getState = store.getState;
    window.dispatch = store.dispatch; 

});