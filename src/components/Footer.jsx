import React from 'react';
import './Footer.css';
import rideEveeLogo from '../assets/ride-evee-logo.png';
import arrow from '../assets/arrow.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img className="logo" src={rideEveeLogo} alt="Logo" />
        <div className="foot-links">
          <a>Home</a>
          <a>About</a>
          <a>Services</a>
          <a>News</a>
          <a>Contact</a>
        </div>
        <div className="newsletter">
        
          <div className="input-container">
          <h2 className='news-txt'>Newsletter</h2>
            <input
              className="email-input"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />
            <button className="submit-button" type="submit">
              <img className="arrow" src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="copyright-txt">
          <p>All Copyrights are reserved by RIDE EVEE</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
