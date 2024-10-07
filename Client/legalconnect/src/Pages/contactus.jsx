import React from 'react';
import './contact.css';
import cartoon from "../Images/cartoon1.jpg";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us for any queries or assistance.</p>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-list">
          <div className="team-member">
            <img src={cartoon} alt="Vaishnavi" />
            <h3>Vaishnavi</h3>
            <p>2nd Year CSE Student</p>
            <p>Web Development Specialist</p>
            <p>Email: vaishnavi@example.com</p>
            <p>Phone: +1 123 456 7890</p>
          </div>

          <div className="team-member">
            <img src={cartoon} alt="Arya" />
            <h3>Arya</h3>
            <p>2nd Year CSE Student</p>
            <p>Web Development Specialist</p>
            <p>Email: arya@example.com</p>
            <p>Phone: +1 987 654 3210</p>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: support@legalconnect.com</p>
        <p>Phone: +1 (234) 567-890</p>
      </div>
    </div>
  );
};

export default ContactUs;
