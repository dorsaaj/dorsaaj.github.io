import React from 'react'
import email from "../../images/email.png"
import github from "../../images/github.png"
import linkdin from "../../images/linkedin.png"
import './footer.css'

const Footer = () => {
  return (
    <div >
        <div className='footer-container'>
        <div className="icon-container">
        <img src={email} alt = "email"/>
        <a href="https://www.linkedin.com/in/dorsa-ajami/"><img src={linkdin} alt = "linkdin"/></a>
        <a href="https://github.com/dorsaaj"><img src={github} alt = "github"/></a>
        </div>
        </div>


    </div>
  )
}

export default Footer
