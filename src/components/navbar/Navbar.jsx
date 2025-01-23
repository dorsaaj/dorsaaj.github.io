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
          <p><Link to="/aboutMe">About me</Link></p>
          <p><Link to="/contactMe" >Contact me</Link></p>
          <p><a  href="Dorsa_resume.pdf"download={"Dorsa_resume.pdf"}>Resume</a></p>
          <p><a href="https://www.linkedin.com/in/dorsa-ajami/">LinkedIn</a></p>
          <p><a href="https://github.com/dorsaaj">Github page</a></p>

          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;