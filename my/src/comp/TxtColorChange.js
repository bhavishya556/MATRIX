import React, { useState, useEffect } from 'react';
import './txtColorChange.css';

const TxtColorChange = () => {
  const [color1, setColor1] = useState(0);
  const [color2, setColor2] = useState(180);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setColor1(y); // Change from black (0) to white (255)
      setColor2(y / 5);

      // Use the provided class names to select elements
      const textContainer = document.querySelector('.color-change-text2');
      const textElement = document.querySelector('.color-change-text');

      if (textContainer && textElement) {
        textContainer.style.color = `hsla(${color1}, 85%, 75%, 1)`;
        // textElement.style.color = `hsla(${color2}, 85%, 40%, 5)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [color1, color2]);
  
  return (
    <div className='txt-con'>
      
        <div className='txt-left'>
 
       
          
        </div>
        <div className='txt-right'>
        <h1>
          <p className='color-change-text'>Future</p>
          <p className='color-change-text2'><u>Developer </u></p>
        </h1>
          
          </div>
       
   
    </div>
  );
};

export default TxtColorChange;
