import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import image from "../Images/law.jpg";
import step1Image from "../Images/law.jpg"; 
import step2Image from "../Images/OIP.jpeg";
import step3Image from "../Images/OIP2.jpeg"; 
import userImage from "../Images/OIP3.jpg"; 
import upgradePlanImage from "../Images/OIP4.jpg"; 

const Landing = () => {
  return (
    <div className="landing">
      <header className="header">
        <div className="header-content">
          <h1>FIND LEGAL HELP</h1>
          <div className="auth-buttons">
            <Link to="/signin" className="btn">Sign in</Link>
            <Link to="/signup" className="btn">Sign up</Link>{/* Add the route for sign-up if you have it */}
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

        <section id="how-it-works">
          <div className="container">
            <div className="steps">
              <div className="step">
                <img src={step1Image} alt="Step 1" />
                <h3>Step 1</h3>
                <p>Enter your legal query. Describe your case or browse through our list of law professionals.</p>
              </div>
              <div className="step">
                <img src={step2Image} alt="Step 2" />
                <h3>Step 2</h3>
                <p>Choose a legal expert and schedule a consultation. Get closer to resolving your legal issue.</p>
              </div>
              <div className="step">
                <img src={step3Image} alt="Step 3" />
                <h3>Step 3</h3>
                <p>Confirm your appointment. Sit back and relax as our experts prepare to assist you!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="join-legalconnect">
          <div className="container">
            <h2>Join LegalConnect as a user</h2>
            <div className="join-options">
              <div className="option">
                <img src={userImage} alt="User" />
                <h3>As a client</h3>
                <p>Find legal help and advice from professionals. All you need is an internet connection.</p>
                <button>Connect now</button>
              </div>
              <div className="option">
                <img src={upgradePlanImage} alt="Upgrade Plan" />
                <h3>Upgrade Plan</h3>
                <p>Get access to premium features with our reliability, client management, and more.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container-1">
            <div className="contact-info">
              <div className="contact-address">
                <p>123 Legal Way City, Country</p>
                <p>info@legalconnect.com</p>
                <p>+1 222 333 444</p>
              </div>
              <div className="contact-hours">
                <p>Working hours:</p>
                <p>Monday - Friday: 9:00 - 5:00</p>
                <p>Saturday - Sunday: 10:00 - 4:00</p>
              </div>
              <div className="contact-social">
                <p>Connect with us:</p>
                <p>+91 1122334455</p>
                <div className="social-icons">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
              <div className="footer-links">
                <p>Profile</p>
                <p>Services</p>
                <p>Consultation</p>
                <p>Book</p>
                <p>Online Presence</p>
              </div>
            </div>
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
