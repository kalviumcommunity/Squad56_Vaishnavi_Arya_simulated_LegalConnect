import React from 'react';
import './ConnectNow.css';

const ConnectNow = () => {
  return (
    <div className="connectnow-container">
      <aside className="connectnow-sidebar">
        <h2>LegalConn.io</h2>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Professional</a></li>
            <li><a href="#">Browse</a></li>
            <li><a href="#">Law</a></li>
            <li><a href="#">Book</a></li>
            <li><a href="#">Account</a></li>
          </ul>
        </nav>
        <button className="connectnow-view-profile">View Profile</button>
        <button className="connectnow-logout">Log out</button>
      </aside>

      <main className="connectnow-main-content">
        <header className="connectnow-top-bar">
          <input type="search" className="connectnow-search" placeholder="Search for professionals" />
          <div className="connectnow-icons">
            <span className="connectnow-icon">🔔</span>
            <span className="connectnow-icon">👤</span>
          </div>
        </header>

        <section className="connectnow-categories">
          <div className="connectnow-header">
            <h2>Categories</h2>
            <p>Last update: January 23, 2023 at 2:39 PM</p>
            <button className="connectnow-add-category">Add category</button>
          </div>

          <div className="connectnow-category-list">
            <div className="connectnow-category-item">
              <h3>Lawyers</h3>
              <p>49 professionals</p>
              <button>+</button>
            </div>
            <div className="connectnow-category-item">
              <h3>Advocates</h3>
              <p>7 professionals</p>
              <button>+</button>
            </div>
            <div className="connectnow-category-item">
              <h3>Legal Services</h3>
              <p>13 services</p>
              <button>+</button>
            </div>
            <div className="connectnow-category-item">
              <h3>Legal Assistance</h3>
              <p>63 services</p>
              <button>+</button>
            </div>
            <div className="connectnow-category-item">
              <h3>Legal Representation</h3>
              <p>23 professionals</p>
              <button>+</button>
            </div>
            <div className="connectnow-category-item">
              <h3>Legal Consultation</h3>
              <p>11 services</p>
              <button>+</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ConnectNow;
