import React, { useState } from 'react'
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'
import Settings from './Settings';


const MainMenu = () => {
  const [introtext, showIntroText] = useState(true);
  const [introbutton, showIntroButton] = useState(true)
  const [showMenu, setShowMenu] = useState(false);

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();

  const handleMenuOpen = () => {
    setShowMenu(!showMenu);
  }

  return (

    <div className='start-wrapper'>
      {showMenu && <div className='settings-wrapper2' onClick={handleMenuOpen}><Settings /></div>}
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
          <div className='settings-toggle' onClick={handleMenuOpen}>Menu</div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
