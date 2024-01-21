import React, { useState } from 'react'
import { useHealthBar } from '../contexts/HealthContext';
import { useShip } from '../contexts/ShipContext';
import { useCredits } from '../contexts/CreditsContext';

const Component = () => {

  const { health, updateHealth } = useHealth();
  const { ship, updateShip } = useShip();
  const { credits, updateCredits } = useCredits();

  return (
    <div className='start-wrapper'>
      <div className='start'>
        
        <div className='hud'>
          <p className='health-bar'>Health: {health}</p>
          <i class="fa-brands fa-space-awesome">{ship}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default Component