import React, { useState } from 'react';
import './try.css';

const Try = () => {
  // State to store the text for the first item
  const [text, setText] = useState('programming skills');
  const [text1, setText1] = useState('Technologies and Tools');
  const handleMouseEnter1 = () => {
    setText1('React');
  };

  // Event handler for mouse leave
  const handleMouseLeave1 = () => {
    setText1('Technologies and Tools');
  };



  // Event handler for mouse enter
  const handleMouseEnter = () => {
    setText('Java, JavaScript, Python, C++');
  };

  // Event handler for mouse leave
  const handleMouseLeave = () => {
    setText('programming skills');
  };

  return (
    <div>
      <section>
        <div 
          className="item" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <span>{text}</span>
        </div>
        <div className="item"
                onMouseEnter={handleMouseEnter1} 
                onMouseLeave={handleMouseLeave1}
        >
          <span>{text1}</span>
        </div>
      </section>
    </div>
  );
}

export default Try;

