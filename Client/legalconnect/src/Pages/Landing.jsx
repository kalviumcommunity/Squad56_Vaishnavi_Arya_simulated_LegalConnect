import { Link } from 'react-router-dom';
import React from 'react';
import './Landing.css';
import image from "../Images/law.jpg"

const Landing = () => {
  return (
    <div className="landing">
      <header className="header">
        <div className="header-content">
          <h1>FIND LEGAL HELP</h1>
          <div className="auth-buttons">
          <Link to="/signin" className="btn">Sign in</Link>
            <button className="btn">Sign up</button>
          </div>
        </div>
      </header>

      <main>
        <div className="search-bar">
        <img height={400} src={image} alt="background" />
          <h1>Connect with top law professionals</h1>
          <div className="search-input">
            <input type="text" placeholder="Search for legal services" />
            <button className="btn">Search</button>
          </div>
        </div>

        <section className="how-it-works">
          <h2>How LegalConnect works</h2>
          <div className="steps">
           
            <div className="step">
              <img src="path-to-image" alt="Step 1" />
              <p>Step 1 description</p>
            </div>
            {/* Step 2 */}
            <div className="step">
              <img src="path-to-image" alt="Step 2" />
              <p>Step 2 description</p>
            </div>
            {/* Add more steps as needed */}
          </div>
        </section>
      </main>

      <div className="chat-box">
        <p>How can I help you?</p>
      </div>
    </div>
  );
};

export default Landing;
