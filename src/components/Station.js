import React, { useState } from 'react';
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'
import Settings from './Settings';

const Station = () => {
  const [stationintrotext, showStationIntroText] = useState(true);
  const [broke, showBroke] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();


  const addHealth = () => {
    const healingCost = 20;
    if (credits >= healingCost) {
      updateHealth(10);
      updateCredits(-healingCost);
    } else {
      showBroke(true);
      console.log('Not enough credits');
      setTimeout(showBroke, 5000)
    }
  };

  const handleMenuOpen = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='start-wrapper'>
      {
        showMenu && <div className='settings-wrapper2'
          onClick={handleMenuOpen}><Settings /></div>
      }
      <img className="retro-overlay" src="/images/retro_overlay.png"
        alt="Retro Overlay" />
      <div className='start'>
        {
          stationintrotext && <div class="station-text1">
            The station has an infirmary - Would you like healing?</div>
        }
        <div className='intro-choices'>
          <button className='intro-btn'
            onClick={addHealth}>Heal? $20</button>
          <Link to="/Ship" className='intro-btn'>Go to Ship</Link>
          <Link to="/Salvage" className='intro-btn'>Go Salvage</Link>
        </div>
        <div className='hud'>
          <p className='health-bar'>✚Health: {health}</p>
          <i className="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
          <div className='settings-toggle'
            onClick={handleMenuOpen}>Menu</div>
        </div>
        {
          broke && <div class="broke-text">
            Not enough credits - Come back later.</div>
        }
      </div>
    </div >
  )
}

export default Station
