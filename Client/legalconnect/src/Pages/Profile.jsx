import React from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="Cody Glickman" className="profile-image" />
        <h1>Arya Vaishnavi</h1>
        <p>MIT ADT CAMPUS, PUNE</p>
        <div className="links">
          <a href="https://www.instagram.com/accounts/onetap/?next=%2F&hl=en" className="link">Instagram</a>
          <a href="https://www.linkedin.com/feed/" className="link">LinkedIn</a>
          <a href="https://github.com/" className="link">GitHub</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:your-email@example.com" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
