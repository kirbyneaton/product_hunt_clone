import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import ProductIndexContainer from "./product_index/product_index_container";
import ProductShowContainer from "./product_show/product_show_container";
import {Route, Switch, Link} from 'react-router-dom';
import Modal from "./modal/modal";

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to='/' id="header-logo"><img src="https://raw.githubusercontent.com/kirbyneaton/product_hunt_clone/product-index/app/assets/images/product-hunt-logo-orange-960.png" id="logo" alt="product-hunt-logo" /></Link>
            <nav>
                <a href="https://github.com/kirbyneaton/product_hunt_clone" target="_blank" className="header-link">Github</a>
                <a href="https://www.linkedin.com/in/kirbyneaton/" target="_blank" className="header-link">LinkedIn</a>
                <a href="https://angel.co/u/kirby-neaton" target="_blank" className="header-link">AngelList</a>
            </nav>
            <div id="login-corner">
                <button id="create-product">Submit New Fish</button>
                <div className="greeting-cont"><GreetingContainer /></div>
            </div>
        </header>
        <Switch>
            {/* <Route path="/products/:productId" component={ProductShowContainer} /> */}
            <Route path="/" component={ProductIndexContainer} />
        </Switch>
        
       
    </div>
);

export default App;