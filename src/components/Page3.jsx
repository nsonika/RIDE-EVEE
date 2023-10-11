import React from 'react'
import './Page3.css'
import img from '../assets/buildings.png'

const Page3 = () => {
  return (
    <div className='page3'>
      <div className='image-container'> 
      <img src={img} alt="" className='why-choose'/>
  
<div className='overlay-text'>
      <h1 className='head-txt'>Why choose AC Bus or AC Train <br />for your One-way Journey?</h1>
      <br />
      <p className='para-txt'>Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your travel time and you travel at your own private space also to enjoy your journey. Our one way taxi will come at your doorstep and take you to your desired destination. So book you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly 
        <br /><br />
        read More....</p>
      </div>
      </div>
    </div>
  )
}

export default Page3