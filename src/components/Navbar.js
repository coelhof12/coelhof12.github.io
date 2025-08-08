import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Components.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`navbar ${isMobileMenuOpen ? "open" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="../assets/images/FC_logo.png"
            alt="Francisco Coelho logo"
            loading="lazy"
          />
        </Link>
      </div>
      <ul
        className={`navbar-links ${
          isMobileMenuOpen ? "show-navbar-links" : ""
        }`}
      >
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        className={`navbar-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </nav>
  );
};

export default Navbar;