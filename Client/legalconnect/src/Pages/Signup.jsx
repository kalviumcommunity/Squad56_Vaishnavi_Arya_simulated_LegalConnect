import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import background from "../Images/orange.webp"

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="welcome-back">
        <img src={background} alt='background' className="background-image" />
        <h2>Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <Link to="/signin" className="btn1">Sign In</Link>
      </div>
      <div className="create-account">
        <h2>Create Account</h2>
        <div className="social-login">
          <button className="social-btn fb">f</button>
          <button className="social-btn g">G</button>
          <button className="social-btn li">in</button>
        </div>
        <p>or use your email for registration:</p>
        <form className="signup-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="btn01">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
