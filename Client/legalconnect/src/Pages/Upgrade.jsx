import React from 'react';
import './Upgrade.css'; // Ensure to add your styling here

const Upgrade = () => {
  return (
    <div className="upgrade-container">
      <header className="upgrade-header">
        <h1>Upgrade to Premium</h1>
        <p>Unlock extra features that enhance your legal service experience.</p>
      </header>

      <section className="upgrade-content">
        <div className="benefits">
          <h2>Why Upgrade?</h2>
          <ul>
            <li>Priority consultations with top legal professionals</li>
            <li>Advanced case management tools</li>
            <li>Increased storage for legal documents</li>
            <li>24/7 priority customer support</li>
          </ul>
        </div>

        <div className="pricing">
          <h2>Choose Your Plan</h2>
          <div className="pricing-options">
            <div className="price-option">
              <h3>Basic Plan</h3>
              <p>$9.99/month</p>
              <p>Access to basic legal services</p>
              <button>Choose Basic</button>
            </div>

            <div className="price-option premium">
              <h3>Premium Plan</h3>
              <p>$29.99/month</p>
              <p>All features, priority access, and more</p>
              <button>Choose Premium</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="upgrade-footer">
        <p>Contact us: <a href="mailto:support@legalconnect.com">support@legalconnect.com</a> | +1 (234) 567-890</p>
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </footer>
    </div>
  );
};

export default Upgrade;
