import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConnectNow.css';
import { Link } from 'react-router-dom';

const ConnectNow = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category === 'Lawyers') {
      navigate('/lawyers');
    } else if (category === 'Legal Services') {
      navigate('/legalservices');
    } else if (category === 'Legal Assistance') {
      navigate('/legalassistance');
    } else if (category === 'Legal Representation') {
      navigate('/legalrepresentation');
    } else if (category === 'Law') {
      navigate('/law'); 
    }
    
    
  };

  return (
    <div className="connectnow-container">
      <aside className="connectnow-sidebar">
        <h2>LegalConn.io</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Professional</a></li>
            <li><a href="#">Browse</a></li>
            <li><Link to="/law">Law</Link></li>       
            <li><Link to="/lawbooks">Books</Link> </li>
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
            <button className="connectnow-add-category">Add category </button>
          </div>

          <div className="connectnow-category-list">
            <div className="connectnow-category-item" onClick={() => handleCategoryClick('Lawyers')}>
              <h3>Lawyers</h3>
              <p>49 professionals</p>
              <button>+</button>
            </div>
            <div className="connectnow-category-item" onClick={() => handleCategoryClick('Legal Services')}>
              <h3>Legal Services</h3>
              <p>13 services</p>
              <button>+</button>
            </div>
            <div className="connectnow-category-item" onClick={() => handleCategoryClick('Legal Assistance')}>
              <h3>Legal Assistance</h3>
              <p>63 services</p>
              <button>+</button>
            </div>
            <div className="connectnow-category-item" onClick={() => handleCategoryClick('Legal Representation')}>
              <h3>Legal Representation</h3>
              <p>23 professionals</p>
              <button>+</button>
            </div>
           
          </div>
        </section>
      </main>
    </div>
  );
};

export default ConnectNow;
