import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to EventPlanner360</h1>
            <p>Plan, organize, and oversee your events seamlessly.</p>
            <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </div>
    );
};

export default HomePage;
