import React from "react";
import './Page5.css';
import car1 from "../assets/car.png";
import car2 from "../assets/car2.png";
import driving from "../assets/driving1.png";
import people from "../assets/people1.png";
import money from "../assets/moneys.png";


export const Page5 = () => {
    return (
        <div className="page5">
       <div className='discover-section'>
        <h3 className='discover-heading'>Discovering India's diverse landscapes, one scenic road trip at a time</h3>
        <ul className='discover-list'>
        <li>Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together. We're passionate about making car hire accessible and enjoyable for everyone.</li>
        <li>Instead of worrying about the road, relax in our chauffeur-driven cabs on your next vacation. With a presence in over 2000 cities across India, we're here to take you wherever your heart desires with our car rental services.</li>
        <li>We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and Savor regional cuisines along the way. These moments of discovery enrich your travels and create lasting memories through our rent a car service</li>
        <li>No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options. Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi servic</li>
        <li>Planning your trip is a breeze with our user-friendly website, or you can chat with our travel experts at 8960170877 for personalized guidance on car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car.</li>
        <li>Planning your trip is a breeze with our user-friendly website, or you can chat with our travel experts at 8960170877 for personalized guidance on car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car.</li>
        </ul>
    </div>


    <div className="table">
  <table className="table-style">
    <thead>
      <tr>
        <th>
          <img src={car1} alt="" className="inline-icon" /> Cab Type
        </th>
        <th>
          <img src={car2} alt="" className="inline-icon" /> Models Include
        </th>
        <th>
          <img src={people} alt="" className="inline-icon" /> Passengers
        </th>
        <th>
          <img src={driving} alt="" className="inline-icon" /> Ideal For
        </th>
        <th>
          <img src={money} alt="" className="inline-icon" /> Fare
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ac Sedan</td>
        <td>Etios, Amaze, Dzire etc.</td>
        <td>4 Pax</td>
        <td>Comfortable trips with small families</td>
        <td>Rs.11/KM</td>
      </tr>
      <tr>
        <td>AC Hatchbacks</td>
        <td>Wagon R, Celerio, Micra etc.</td>
        <td>4 Pax</td>
        <td>Budget trips over short distances</td>
        <td>Rs.11/KM</td>
      </tr>
      <tr>
        <td>AC SUV</td>
        <td>Ertiga, Xylo etc.</td>
        <td>6-7 Pax</td>
        <td>Premium trips with large families</td>
        <td>Rs.13/KM</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
    );
    }