import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import background from "../Images/orange.webp";
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const username = /^[A-Za-z ]+$/;
    const userEmailRegex = /^[a-z][a-z0-9]*@gmail\.com$/;

    if (!username.test(name)) {
      alert("Name can only contain alphabets and spaces.");
    } else if (!userEmailRegex.test(email)) {
      alert("The email should start with an alphabet and be a valid Gmail address.");
    } else {
      const userData = {
        name: name,
        email: email,
        password: password
      };

      try {
        const res = await axios.post("http://localhost:3000/signup", userData);
        alert(res.data);
        navigate("/");
      } catch (err) {
        console.error(err);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="welcome-back">
        <img src={background} alt='background' className="background-image" />
        <h2>Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <Link to="/signin" className="btn01">Sign In</Link>
      </div>
      <div className="create-account">
        <h2>Create Account</h2>
        <div className="social-login">
          <button className="social-btn fb">f</button>
          <button className="social-btn g">G</button>
          <button className="social-btn li">in</button>
        </div>
        <p>or use your email for registration:</p>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn02">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
