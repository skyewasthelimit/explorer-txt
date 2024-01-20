import React from 'react'
import { useHealthBar } from '../contexts/HealthBarContext';
import { useShip } from '../contexts/ShipContext';
import { useCredits } from '../contexts/CreditsContext';

const Component = () => {

  const { health, updateHealth } = useHealthBar();
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