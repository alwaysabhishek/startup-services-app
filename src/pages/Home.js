import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;

  /* Dark mode styles */
  &.dark-mode {
    background-color: #121212;
    color: #ffffff;

    .hero {
      background-color: #1e1e1e;
    }

    .social-links .social-icon {
      color: #ffffff;
    }
  }

  .theme-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: rotate(180deg);
    }
  }

  .hero {
    background-color: #f4f4f4;
    padding: 3rem 0;
    margin-bottom: 2rem;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;

    .social-icon {
      font-size: 2rem;
      color: #333;
      transition: color 0.3s ease;

      &:hover {
        color: #007bff;
      }
    }
  }
`;

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <HomeContainer className={isDarkMode ? 'dark-mode' : ''}>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      <div className="hero">
        <h1>Welcome to StartupServices</h1>
        <p>Innovative Digital Solutions for Modern Businesses</p>
      </div>

      <section>
        <h2>Our Core Services</h2>
        <div>
          <h3>Web Development</h3>
          <p>Custom web solutions tailored to your business needs</p>
        </div>
      </section>

      <div className="social-links">
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </HomeContainer>
  );
};

export default Home;


