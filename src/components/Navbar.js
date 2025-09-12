import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Components.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined' ? (localStorage.getItem('theme') || '') : ''
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', next);
    }
  };

  useEffect(() => {
    if (!theme && typeof window !== 'undefined') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    } else if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <nav
      className={`navbar ${isMobileMenuOpen ? "open" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-logo">
        <NavLink to="/" end>
          <img
            src="/assets/images/FC_logo.png"
            alt="Francisco Coelho logo"
            loading="lazy"
          />
        </NavLink>
      </div>
      <ul
        className={`navbar-links ${
          isMobileMenuOpen ? "show-navbar-links" : ""
        }`}
      >
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
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
