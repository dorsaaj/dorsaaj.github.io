import React from 'react'
import dorsa from '../../images/dorsa.jpg'
import './header.css'
const Header = () => {
  return (
    <div>
      <div className='image-container'>
      <img src={dorsa} alt='dorsa pic' className='main-image' />
      </div>
    </div>
  )
}

export default Header
