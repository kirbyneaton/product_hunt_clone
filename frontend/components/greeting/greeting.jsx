import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const navLinks = () => (
        <nav className='login-signup-modal'>
            <button className='button' id='signin-button' onClick={()=> openModal('Login')}>Sign In</button>
            <button className='button' id='signup-button' onClick={()=> openModal('Signup')}>Sign Up</button>
        </nav>
    );
    const customGreeting = () => (
        <nav className='login-signup-modal'>
            <Link id="submit-new-fish" to='/products'><button id="submit-product">Submit New Fish</button></Link>
            <Link to={`/users/${currentUser.id}`} id='link-header-greeting'><h4 id='header-greeting'>Hi, {currentUser.username}! 🐻</h4></Link>
            <Link to='/'><button className='button' id='signup-button' onClick={logout}>Logout</button></Link>
        </nav>
    );

    return currentUser ? customGreeting() : navLinks();
};

export default Greeting;