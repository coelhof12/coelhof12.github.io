import React from 'react';
import './Footer.css'; // Add custom styles here

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 My Portfolio. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;