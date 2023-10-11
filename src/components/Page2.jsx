import React from 'react';
import hand from '../assets/hand.png';
import driving from '../assets/driving.png';
import Frame1 from '../assets/Frame1.png';
import './Page2.css';

export const Page2 = () => {
    return (
        <div className='page2'>
            <h1 className='heading'>
                India's Leading One-Way Inter-City Cab Service Provider
            </h1>

            <div className='info-container'>
                <img src={Frame1} alt='' className='car-img' />

                <div className='info-box'>
                    <img src={hand} alt='' className='hand-icon' />
                    <br />
                    <p className='title green-text'>Return Fare, Not Fair!</p>
                    <br />
                    <p>
                        Why Pay for Return Journey when you are travelling
                        one-way? Now get discounted AC Taxi at just half of the
                        round trip cost for your one-way travel.
                    </p>
                </div>

                <div className='info-box'>
                    <img src={driving} alt='' className='driving-icon' />
                    <br />
                    <p className='title green-text'>Now available routes are!</p>
                    <br />
                    <p>
                        Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly
                    </p>
                </div>
            </div>
        </div>
    );
};
