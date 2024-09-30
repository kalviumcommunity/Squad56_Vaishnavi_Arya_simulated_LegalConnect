import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';
import axios from 'axios';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            setError('Please enter both username and password.');
            return;
        }

        const loginData = {
            name: username,
            password: password
        };

        try {
            const res = await axios.post("http://localhost:3000/login", loginData);
            const { token, name, id } = res.data;

            if (token) {
                localStorage.setItem("token", token);
                localStorage.setItem("Username", name);
                localStorage.setItem("id", id);

                alert("Login Successful!");
                setIsLoggedIn(true);

                setTimeout(() => {
                    navigate("/");
                }, 1500);
            } else {
                setError("User not found. Please create an account.");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred. Please try again.");
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
                    <Link to="/forgot-password">Forgot your password?</Link>
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
