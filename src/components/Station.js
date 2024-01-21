import React, { useState } from 'react';
import { useHealth } from '../contexts/HealthContext';
import { useShip } from '../contexts/ShipContext';
import { useCredits } from '../contexts/CreditsContext';

const Station = () => {
  const [stationintrotext, showStationIntroText] = useState(true);
  const [broke, showBroke] = useState(false);

  const { health, updateHealth } = useHealth();
  const { ship, updateShip } = useShip();
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
      <div className='start'>
        {stationintrotext && <div class="station-text1">The station has an infirmary - Would you like healing?</div>}
        <div className='intro-choices'>
          <button className='intro-btn' onClick={addHealth}>Heal</button>
          <a href="/Ship"><button className='intro-btn'>Go to Ship</button></a>
          <a href="/Salvage"><button className='intro-btn'>Go Salvage</button></a>
        </div>
        <div className='hud'>
          <p className='health-bar'>Health: {health}</p>
          <i class="fa-brands fa-space-awesome">{ship}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
        {broke && <div class="broke-text">Not enough credits - Come back later.</div>}
      </div>
    </div >
  )
}

export default Station
