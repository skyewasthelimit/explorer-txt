import React, { useState } from 'react'
import { useHealth, useCredits, useFuel, usePlanet } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'
import { PLANETS } from '../constants/planets';

const Component = () => {

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();
  const { planet, updatePlanet } = usePlanet();

  return (
    <div className='start-wrapper'>
       <img className="retro-overlay" src="/images/retro_overlay.png" alt="Retro Overlay" />
      <div className='start'>

        <div className='hud'>
          <p className='health-bar'>✚Health: {health}</p>
          <i className="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default Component