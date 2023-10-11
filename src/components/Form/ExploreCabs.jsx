import React, { useState } from 'react';
import './ExploreCabs.css';
import route from '../../assets/route.png';
import location from '../../assets/location.png';
import plane from '../../assets/plane.png';

export const ExploreCabs = () => {
  const [selectedOption, setSelectedOption] = useState('outstation');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='explore'>
    <div className="btns">
      <button 
        className={selectedOption === 'outstation' ? 'selected' : ''} 
        onClick={() => handleOptionChange('outstation')}
      >
        Outstation
      </button>
      <button 
        className={selectedOption === 'local' ? 'selected' : ''} 
        onClick={() => handleOptionChange('local')}
      >
        Local
      </button>
      <button 
        className={selectedOption === 'airport' ? 'selected' : ''} 
        onClick={() => handleOptionChange('airport')}
      >
        Airport
      </button>
    </div>

      {selectedOption === 'outstation' && (
        <div className="outstation exp-type">
          {/* ... content for outstation */}


          <div className="from">
         <p class="para1">From</p>
         <input class="inpus1" type="text" id="" placeholder="start typing city" />
             <img src={location} alt="" className='locate-icon'/>
             
    </div>  
<img src={route} alt="" className='route-icon'/>
    <div className="to">
         <p class="para1">To</p>
         <input class="inpus1" type="text" id="" placeholder="start typing city" />
             <img src={location} alt="" className='locate-icon'/>
      </div>  
                  
    
      <div className="date">
         <p class="para1">Pick Up Date</p>
         <input class="inpus1" type="date" id="" placeholder="start typing city" />
      </div>  

      <div className="time">
         <p class="para1">Pick Up At</p>
         <input class="inpus1" type="time" id="" placeholder="start typing city" />
      </div>                
        </div>
      )}

      {selectedOption === 'local' && (
        <div className="local exp-type">
          {/* ... content for local */}

          <div className="from">
         <p class="para1">From</p>
         <input class="inpus1" type="text" id="" placeholder="start typing city" />
             <img src={location} alt="" className='locate-icon'/>
    </div>  

    
      <div className="date">
         <p class="para1">Pick Up Date</p>
         <input class="inpus1" type="date" id="" placeholder="start typing city" />
      </div>  

      <div className="time">
         <p class="para1">Pick Up At</p>
         <input class="inpus1" type="time" id="" placeholder="start typing city" />
      </div>                           
                                    
       </div>
        
      )}

      {selectedOption === 'airport' && (
        <div className="airport exp-type">
          {/* ... content for airport */}

          <div className="from">
       <p class="para1">From</p>
       <input class="inpus1" type="text" id="" placeholder="start typing city" />
       <img src={location} alt="" className='locate-icon'/>
  </div>  
<img src={route} alt="" className='route-icon'/>
  <div className="to">
       <p class="para1">To</p>
       <input class="inpus1" type="text" id="" placeholder="start typing city" />
       <img src={location} alt="" className='locate-icon'/>
    </div>  
                
  
    <div className="date">
       <p class="para1">Pick Up Date</p>
       <input class="inpus1" type="date" id="" placeholder="start typing city" />
    </div>  

    <div className="trip">
       <p class="para1">Trip Type</p>
       <input class="inpus1" type="text" id="" placeholder="choose airport" />
       <img src={plane} alt="" className='locate-icon'/>
    </div>                           
                                  
     </div>

          
        
      )}

      <div className="exp-btn">
        <button>Explore</button>
      </div>
    </div>
  );
};
