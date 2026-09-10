import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onSignUpClick, onLoginClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">

          {/* 1. Left Corner: Logo */}
          <Link to="/" className="logo" onClick={closeMenu} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="logo-icon">✦</div>
            <span>IX AI Chatbot</span>
          </Link>

          {/* 2. Middle: Navigation Links */}
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#dashboard" onClick={closeMenu}>Platform</a>
            <a href="#integrations" onClick={closeMenu}>Integrations</a>
            <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
          </nav>

          {/* 3. Right Corner: Log in & Sign up Buttons + Hamburger */}
          <div className="nav-header-right">
            <div className="nav-actions">
              <button className="login-btn" onClick={() => { closeMenu(); onLoginClick(); }}>
                Log in
              </button>
              <button className="primary-btn nav-btn" onClick={() => { closeMenu(); onSignUpClick(); }}>
                Sign up
              </button>
            </div>

    <button 
  className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
  onClick={toggleMenu}
  aria-label="Toggle navigation"
>
  {isMenuOpen ? (
    /* Active State: Clean 'X' Close Icon */
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ) : (
    /* Normal State: Thin & Sleek 3 Lines */
    <svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )}
</button>
          </div>

        </div>
      </header>

      {/* Background Dimmed Overlay for Mobile */}
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;