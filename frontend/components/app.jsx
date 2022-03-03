import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import {Route, Link} from 'react-router-dom';
import Modal from "./modal/modal";

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to='/' id="logo">P</Link>
            <nav>
                <div className="header-link">Products</div>
                <div className="header-link">Community</div>
                <div className="header-link">Tools</div>
                <div className="header-link">Jobs</div>
                <div className="header-link">About</div>
            </nav>
            <div className="greeting-cont"><GreetingContainer /></div>
        </header>
       
    </div>
);

export default App;