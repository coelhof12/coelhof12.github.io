import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Components.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="../assets/images/FC_logo.png" alt="Logo"/>
        </Link>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'show-navbar-links' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
        &#9776; {/* Menu icon */}
      </div>
    </nav>
  );
};

export default Navbar;