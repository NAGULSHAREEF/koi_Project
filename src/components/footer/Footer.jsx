import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer_section'>
      <div className='footer_top'>
        <div className='social_icons'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className='footer_links'>
          <a href='#home'>Home</a>
          <a href='#about'>About us</a>
          <a href='#tokenomics'>Tokenomics</a>
          <a href='#howtobuy'>How to buy</a>
        </div>
      </div>
      <hr className='footer_hr'/>
      <div className='footer_bottom'>
        <p>© 2024</p>
        <div className='bottom_links'>
          <a href='#terms'>Terms and conditions</a>
          <a href='#help'>Helpcenter</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
