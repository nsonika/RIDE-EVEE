import React from 'react'
import './Page4.css'
import flag from '../assets/flag.png';
import cardrive from '../assets/cardrive.png';
import people from '../assets/people.png';
import Vector from '../assets/Vector.png';
import money from '../assets/money.png';

export const Page4 = () => {
  return (
    <div className='page4'>

<div className="box-content">
      <img className="cardrive" src={cardrive} alt="Your Image" />

      <div className="content-col">
        <h1 className="why-chose-heading">Why choose Yatri Car Rental?</h1>
        <div className="grid grid-item">
          {/* First Grid Item */}
          <div className="grid-item">
            <div className='grid-img'>
              <img src={flag} alt="Flag" />
            </div>
            <div className="grid-item-wide">
              <h3>Fast response time</h3>
              <p>
                Avail Best Car Rental Service in Lucknow with a driver for Local or Outstation within the moment of your call for the best car hire experience.
              </p>
            </div>
          </div>

          {/* Second Grid Item */}
          <div className="grid-item">
            <div className='grid-img'>
              <img src={people} alt="People" />
            </div>
            <div className="grid-item-wide">
              <h3>Vast fleet</h3>
              <p>
                We have all kinds of Car on Rent available like Sedan, SUV, MUV, Premium Sedan, Tampo Traveller, etc., as per your requirement.
              </p>
            </div>
          </div>

          {/* Third Grid Item */}
          <div className="grid-item">
            <div className='grid-img'>
              <img src={Vector} alt="Mobile" />
            </div>
            <div className="grid-item-wide">
              <h3>Easy to order</h3>
              <p>
                Easily Book Cab Online with our website or call our customer support team.
              </p>
            </div>
          </div>


          {/* Fourth Grid Item */}
          <div className="grid-item">
            <div className='grid-img'>
              <img src={money} alt="Money" />
            </div>
            <div className="grid-item-wide">
              <h3>Great tariffs</h3>
              <p>
                Our car hire tariff is very low when compared to other operators in Lucknow. Book online cabs with the best prices in Lucknow at Yatri Car Rental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>





    <h3 className='oneway-heading'>Why Choose Oneway Cab?</h3>
    <div className='lists'>
      <div  className='list-col'>
        <ul>
          <li>Instant Booking & Confirmation</li>
          <li>Confirmed Booking Immediately</li>
          <li>No Return Fare for One-Way Trip</li>
          <li>Clean & Professional Cab Services</li>
          <li>No Night or Luggage Charges</li>
        </ul>
      </div>
      <div className='list-col'>
        <ul>
          <li>Pick-up from your house</li>
          <li>Dedicated Cab just for you</li>
          <li>Drop to your desired destination</li>
          <li>Completed more than 20,000+ One-Way Trips</li>
          <li>Multiple Payment Option including Credit Card.</li>
        </ul>
      </div>
    </div>
</div>
  )
}