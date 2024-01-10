import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isLoggedIn, onLogout }) => {
    const handleLogoutClick = (e) => {
        e.preventDefault();
        onLogout();
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#333', padding: '10px', color: '#fff' }}>

            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>

            {!isLoggedIn && <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>}

            {!isLoggedIn && <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>}

            {isLoggedIn && <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</Link>}

            {isLoggedIn && (
                <a href="/logout" style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }} onClick={handleLogoutClick}>
                    Logout
                </a>
            )}

        </nav>

    );
};

export default NavigationBar;