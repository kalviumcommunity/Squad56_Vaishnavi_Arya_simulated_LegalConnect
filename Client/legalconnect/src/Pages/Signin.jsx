import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            setError('Please enter both username and password.');
            return;
        }

        // Store in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Store in cookies
        document.cookie = `username=${username}; path=/;`;
        document.cookie = `password=${password}; path=/;`;

        // Log to console
        console.log('Username:', username);
        console.log('Password:', password);

        // Clear the error message
        setError('');

        // Post-login logic can go here
        console.log('Username and password stored successfully');
    };

    return (
        <div className="signin-container">
            <div className="navbar">
                <div className="logo">LegalConnect</div>
            </div>
            <div className="signin-box">
                <h2>Login to LegalConnect</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="footer-links">
                    <a href="#">Forgot your password?</a>
                    <span> | </span>
                    <Link to="/signup">Create an account</Link> 
                </div>
            </div>
            <div className="footer">
                <p>© 2023 LegalConnect. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Signin;
