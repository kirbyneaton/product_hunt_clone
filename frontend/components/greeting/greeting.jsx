import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const navLinks = () => (
        <nav>
            <Link to="/login" className='button' id='login-button'>Sign In</Link>
            <Link to="/signup" className='button' id='signup-button'>Sign Up</Link>
        </nav>
    );
    const customGreeting = () => (
        <nav>
            <h1 id='header-greeting'>Hi, {currentUser.username}!</h1>
            <button className='button' id='signup-button' onClick={logout}>Logout</button>
        </nav>
    );

    return currentUser ? customGreeting() : navLinks();
};

export default Greeting;