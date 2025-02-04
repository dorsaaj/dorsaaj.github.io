import React, { useState, useEffect } from 'react';
import dorsa from '../../images/dorsa.jpg';
import './header.css';
import Try from './../try /Try';
import Introduction from '../introduction/Introduction';
const Header = () => {
  const texts = ["Fullstack developer", "Backed developer", "Front-end developer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 5 seconds

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <div className="header-container">
      <div className="main-head">
        <img src={dorsa} alt="dorsa pic" className="main-image" />
        <div className="elements-container">
        <div className='text-container'>
        <h1>Hello and Welcome to my Website!</h1>
        <h2>
          My name is Dorsa and I am a <span className="dynamic-text">{texts[currentIndex]}</span>
        </h2>  
        <div className='text-div'>
        <p className='paragraph'> I'm Dorsa, a Computer Science graduate from the Georgia Institute of Technology. I completed my degree in December 2024, and since then, I've been focusing on a variety of personal projects that allow me to apply and expand my skills.</p>
        <p className='paragraph'>I'm particularly interested in full-stack development, backend development, and working with databases. I enjoy creating seamless, end-to-end solutions that connect both the front-end and back-end, while also ensuring data is managed efficiently and securely. Whether it's building dynamic web applications or optimizing database performance, I'm passionate about working with technologies that drive impactful, scalable solutions.</p>
        </div>
 
        </div>
        <button 
        className="download-button" 
          onClick={() => window.location.href = 'Dorsa_resume.pdf'}
          >
            Download Resume
            </button>
        </div>
      </div>
      <div className='skills-main'>
        <p className='Programming-skill'><strong>programming skills:</strong></p>
        <div className='row1'>
        <div><p > java</p><div class="progress-container">
        <div class="progress-bar-java">90%</div></div>
        </div>
        <div><p >Python</p><div class="progress-container">
        <div class="progress-bar-python">85%</div></div>
        </div>
        </div>
        <div className='row2'>
        <div><p >C</p><div class="progress-container">
        <div class="progress-bar-c">70%</div></div>
        </div>
        <div><p >javascript</p><div class="progress-container">
        <div class="progress-bar-javascript">65%</div></div>
        </div>
        </div>
        <p className='Programming-skill'><strong>Tools and Technologies:</strong></p>
        <div class="tools-container">
          <button class="tool-button">HTML/CSS</button>
          <button class="tool-button">React</button>
            <button class="tool-button">Angular</button>
          <button class="tool-button">Tableau</button>
          <button class="tool-button">SQL</button>
          <button class="tool-button">Jenkins</button>
          <button class="tool-button">Data Structures</button>
        </div>


      </div>
    
    
    </div>
  );
}

export default Header;

