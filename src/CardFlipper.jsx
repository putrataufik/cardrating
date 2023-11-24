// CardFlipper.js
import React, { useState } from 'react';
import './CardFlipper.css';
import bcaImport from './assets/bca.png'
import chipCard from './assets/chip.png'

const CardFlipper = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`card ${isFlipped ? 'flip' : ''}`}
        onClick={handleCardClick}
      >
        <div className="front">
            <div className='TopCard'>
                <h1 className='text-xl font-bold text-white'>Paspor</h1>
                <div>
                    <img src={bcaImport} alt="" className='w-16'/>
                </div>   
            </div>
            <div>
                <div className='flex justify-items-start'>
                  <img src={chipCard} alt=""  className='w-16'/>  
                </div>
                  <p className='text-xl flex justify-center font-eb-garamond'>7878 8898 7878 7878</p>

            </div>
        </div>
        <div className="back">
          <h1>Back of Card</h1>
          <p>Click to flip</p>
        </div>
      </div>
    </div>
  );
};

export default CardFlipper;
