import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile-menu {
    display: none;
    
    @media (max-width: 768px) {
      display: block;
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <div className="logo">StartupServices</div>
      
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="mobile-menu" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>
    </Nav>
  );
};

export default Navbar;
