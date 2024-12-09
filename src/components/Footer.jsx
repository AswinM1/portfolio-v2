import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div id="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
        <div className="navigation-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
