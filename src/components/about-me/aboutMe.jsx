import React from 'react';
import Header from '../Header/Header'; // Ensure this path is correct

const AboutMe = () => {
  return (
    <div>
      <Header />  {/* Corrected: opening tag for Header */}
      <p className='text-box'>
        Hello!<br/>
        This is Dorsa. 
        I am a Computer science graduate from Georgia Institution of Technology.<br/>
        I graduated from Georgia Tech in December of 2024, and now I'm working on several personal projects.
      </p>
    </div>
  );
};

export default AboutMe;
