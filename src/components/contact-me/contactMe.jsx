import React from 'react'
import Header from '../Header/Header'; // Ensure this path is correct
import email from "../../images/email.png"
import github from "../../images/github.png"
import linkdin from "../../images/linkedin.png"
import "./contactMe.css"
import ContactForm from '../form/ContactForm';


const ContactMe = () => {
  return (
    <div>
      <div className="contact-me-content">
        <div className="icon-container-contact-me">
          <img src={email} alt = "email"/>
          <a href="https://www.linkedin.com/in/dorsa-ajami/"><img src={linkdin} alt = "linkdin"/></a>
          <a href="https://github.com/dorsaaj"><img src={github} alt = "github"/></a>
        </div>
        <div className='contactform'><ContactForm/></div>
      </div>

    </div>
  )
}

export default ContactMe
