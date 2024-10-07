import React, { useEffect } from 'react';
import './about.css';

const AboutUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 300);
    });
  }, []);

  return (
    <div className="about-container">
      <div className="about-content fade-in">
        <h1>About Us</h1>
        <p>
          At LegalConnect, we believe that everyone deserves easy and affordable access to legal assistance.
          Our platform connects individuals and businesses with legal experts to provide clear, actionable
          guidance on a wide range of legal matters. Whether you're facing a personal issue or handling corporate
          legalities, we offer comprehensive support through our network of experienced lawyers.
        </p>
        <p>
          Our mission is to simplify the legal process, offering users a seamless experience from searching for
          legal help to receiving professional advice. We are committed to creating an accessible, user-friendly
          platform for legal solutions that bridge the gap between those in need of legal help and the experts who can assist them.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
