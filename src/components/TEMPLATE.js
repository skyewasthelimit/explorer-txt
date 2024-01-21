import React, { useState } from 'react'
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';


const Component = () => {

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();

  return (
    <div className='start-wrapper'>
      <div className='start'>

        <div className='hud'>
          <p className='health-bar'>Health: {health}</p>
          <i class="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default Component