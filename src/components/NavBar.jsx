import React from 'react';
import './NavBar.css';
import rideEveeLogo from '../assets/ride-evee-logo.png';
import time from '../assets/time.png';
import circle from '../assets/circle.png'

export const NavBar = () => {
    return (
        <nav>
            <div className="nav-container">
                <div className="start">
                    <img className="ride-evee-logo-1" alt="" src={rideEveeLogo} />
                </div>
                <div className="middle">
                <img className="time-logo" alt="" src={time} />
                </div>
                <div className="end">
                   
                        <button className="vendor-sign-up">Vendor Sign Up</button>
                        <button className="customer-signin">Customer SignIn</button>
                        <img className="circle" alt="" src={circle} />
                </div>
            </div>
        </nav>
    );
};
