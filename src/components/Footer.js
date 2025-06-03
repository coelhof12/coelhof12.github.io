import React from 'react';
import '../styles/Components.css'; // Add custom styles here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/FC_logo.png`}
            alt="FC Logo"
          />
        </div>
      <div className="footer-links">
        <a href="https://github.com/coelhof12" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/francisco-coelho12" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Francisco Coelho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;