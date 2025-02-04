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
        <div className='contactform'><ContactForm/></div>
      </div>

    </div>
  )
}

export default ContactMe
