import React, { useState, useEffect } from 'react';
import dorsa from '../../images/dorsa.jpg';
import './header.css';
import Try from './../try /Try';

const Header = () => {
  const texts = ["full stack developer", "Backed developer", "Front-end developer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <div className="header-container">
        <img src={dorsa} alt="dorsa pic" className="main-image" />
      <div className="elements-container">
        <div className='text-container'>
        <h1>Hello and Welcome to my Website!</h1>
        <h2>
          My name is Dorsa and I am a <span className="dynamic-text">{texts[currentIndex]}</span>
        </h2>  
        </div>
        <div className='try-container'><Try/> </div>
      </div>
    </div>
  );
}

export default Header;

