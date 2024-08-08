import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    return (
        <div className="signin-container">
            <div className="navbar">
                <div className="logo">LegalConnect</div>
            </div>
            <div className="signin-box">
                <h2>Login to LegalConnect</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="footer-links">
                    <a href="#">Forgot your password?</a>
                    <span> | </span>
                    <Link to="/signup">Create an account</Link> {/* Link to Signup page */}
                </div>
            </div>
            <div className="footer">
                <p>© 2023 LegalConnect. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Signin;
