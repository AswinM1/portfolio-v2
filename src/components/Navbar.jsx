import React, { useState } from 'react';
import './navbar.css';  // Import the external CSS file
import { Link } from 'react-scroll';  // Import Link component from react-scroll
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="logo">MyPortfolio</div>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" aria-label="Github"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></a>
      </div>
      
      <div className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="home" smooth={true} duration={500} className="menu-item">Home</Link>
        <Link to="about" smooth={true} duration={500} className="menu-item">About</Link>
        <Link to="projects" smooth={true} duration={500} className="menu-item">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="menu-item">Contact</Link>
        <a href="/resume.pdf" className="resume-button" target="_blank" download>
          My Resume
        </a>
      </div>
      

      {/* Hamburger Menu */}
      <div className="hamburger-icon" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
