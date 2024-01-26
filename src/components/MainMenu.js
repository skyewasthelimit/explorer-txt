import React, { useState } from 'react'
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'


const MainMenu = () => {
  const [introtext, showIntroText] = useState(true);
  const [introbutton, showIntroButton] = useState(true)

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();

  return (
    
    <div className='start-wrapper'>
      <img className="retro-overlay" src="/images/retro_overlay.png" alt="Retro Overlay" />
      <div className='start'>
        {introtext && <div class="menu-text">Welcome back, Explorer. How can we help you?</div>}
        <div className='intro-choices'>
          {introbutton && <Link to="/Ship" className='intro-btn'>Go to Ship</Link>}
          {introbutton && <Link to="/Station" className='intro-btn'>Go to Station</Link>}
          {introbutton && <Link to="/Salvage" className='intro-btn'>Go Salvage</Link>}
        </div>
        <div className='hud'>
          <p className='health-bar'>✚Health: {health}</p>
          <i className="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
