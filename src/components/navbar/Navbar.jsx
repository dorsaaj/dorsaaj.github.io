import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
            <div className="gpt3__navbar-name">
      <h2>
        Dorsa Ajami
      </h2>
      </div>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><Link to="/aboutMe">About me</Link></p>
          <p><Link to="/contactMe" >Contact me</Link></p>
          <p><a  href="Dorsa_resume.pdf"download={"Dorsa_resume.pdf"}>Resume</a></p>
          <p><a href="https://www.linkedin.com/in/dorsa-ajami/">LinkedIn</a></p>
          <p><a href="https://github.com/dorsaaj">Github page</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
            <p><a href="#blog">Contact me </a></p>

          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;