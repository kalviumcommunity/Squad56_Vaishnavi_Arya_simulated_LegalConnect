import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>LegalConnect offers a variety of services to meet your legal needs.</p>
      </div>
      <div className="services-list">
        <div className="service-item">
          <h2>Legal Consultations</h2>
          <p>Connect with licensed professionals for one-on-one advice on your legal issues.</p>
        </div>
        <div className="service-item">
          <h2>Document Preparation</h2>
          <p>Get assistance in preparing essential legal documents, from contracts to agreements.</p>
        </div>
        <div className="service-item">
          <h2>Resource Library</h2>
          <p>Access a curated collection of legal articles, guides, and FAQs to help you understand legal matters.</p>
        </div>
        <div className="service-item">
          <h2>Search for Lawyers</h2>
          <p>Find qualified lawyers specializing in your specific legal needs, such as family or corporate law.</p>
        </div>
        <div className="service-item">
          <h2>Secure Client-Lawyer Communication</h2>
          <p>Communicate with your lawyer via our secure platform to manage cases and updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
