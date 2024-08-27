import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
import axios from 'axios';  // Import axios for making HTTP requests

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            setError('Please enter both username and password.');
            return;
        }

        try {
            const response = await axios.post('/api/login', { username, password });
            localStorage.setItem('token', response.data.token); // Store JWT in localStorage
            setError('');
            // Redirect to another page or handle post-login logic
            console.log('Login successful');
        } catch (err) {
            setError('Invalid username or password.');
        }
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
