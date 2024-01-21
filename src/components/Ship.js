import React, { useState } from 'react';
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'

const Ship = () => {
  const [shipintrotext, showShipIntroText] = useState(true);
  const [broke, showBroke] = useState(false);

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();

  const addFuel = () => {
    const fuelCost = 30;
    if (credits >= fuelCost) {
      updateFuel(10);
      updateCredits(-fuelCost);
    } else {
      showBroke(true);
      console.log('Not enough credits to buy fuel');
      setTimeout(showBroke, 5000)
    }
  };

  return (
    <div className='start-wrapper'>
      <div className='start'>
        {shipintrotext && <div class="ship-text1">Welcome to the ship console - Would you like to refuel?</div>}
        <div className='intro-choices'>
          <button className='intro-btn' onClick={addFuel}>Refuel</button>
          <Link to="/Station" className='intro-btn'>Go to Station</Link>
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

export default Ship
