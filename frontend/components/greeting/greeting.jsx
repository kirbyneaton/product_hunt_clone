import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
    const navLinks = () => (
        <nav className='login-signup-modal'>
            <button className='button' id='login-button' onClick={()=> openModal('Login')}>Sign In</button>
            <button className='button' id='signup-button' onClick={()=> openModal('Signup')}>Sign Up</button>
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