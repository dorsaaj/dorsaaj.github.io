import React, { useState } from 'react';
import './contactform.css'

const ContactForm = () => {
  return (
    <div>
        <div className='contactform'>
         <form className='contactform'>
       <h2>contact me</h2>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label >
        Message:
        <textarea type= "text"/>
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default ContactForm
