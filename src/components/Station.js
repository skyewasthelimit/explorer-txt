import React, { useState } from 'react';
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'

const Station = () => {
  const [stationintrotext, showStationIntroText] = useState(true);
  const [broke, showBroke] = useState(false);

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

  return (
    <div className='start-wrapper'>
      <img className="retro-overlay" src="/images/retro_overlay.png" alt="Retro Overlay" />
      <div className='start'>
        {stationintrotext && <div class="station-text1">The station has an infirmary - Would you like healing?</div>}
        <div className='intro-choices'>
          <button className='intro-btn' onClick={addHealth}>Heal</button>
          <Link to="/Ship" className='intro-btn'>Go to Ship</Link>
          <Link to="/Salvage" className='intro-btn'>Go Salvage</Link>
        </div>
        <div className='hud'>
          <p className='health-bar'>Health: {health}</p>
          <i class="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
        {broke && <div class="broke-text">Not enough credits - Come back later.</div>}
      </div>
    </div >
  )
}

export default Station
