import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const navLinks = () => (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const customGreeting = () => (
        <nav>
            <h1>Hi, {currentUser.username}!</h1>
            <button onClick={logout}>Logout</button>
        </nav>
    );

    return currentUser ? customGreeting() : navLinks();
};

export default Greeting;