import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGoogle, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;

    .social-icon {
      color: white;
      font-size: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: #007bff;
      }
    }
  }

  .copyright {
    margin-top: 1rem;
    font-size: 0.9rem;
  }



  
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="social-links">
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-singh-chouhan-aa2661258" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>
      <div className="copyright">
        © 2025 StartupServices. All Rights Reserved.
      </div>
    </FooterContainer>
  );
};

export default Footer;
