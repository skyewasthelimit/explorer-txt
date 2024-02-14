import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className='start-wrapper'>
      <div className='about-wrapper'>
        <div className='about-dropdown'>
          <h1>About</h1>
          <p className='about-text'>
            Welcome to Explorer.txt. This is a text-based deep space
            salvaging game with rogue-lite mechanics.
            It was built entirely in React.js. The object of Explorer.txt
            it to improve your ship and try to withstand as many missions as
            possible in search of great loot. Thanks for playing and happy exploring.
          </p>
          <div className='settings-text' onClick={handleBack}>Back</div>
        </div>
      </div>
    </div>
  )
}

export default About
