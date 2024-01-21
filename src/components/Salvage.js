import React from 'react'
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'


const Salvage = () => {

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();

  return (
    <div className='start-wrapper'>
      <div className='start'>
        <div className='intro-choices'>
          <Link to="/Ship" className='intro-btn'>Go to Ship</Link>
          <Link to="/Station" className='intro-btn'>Go to Station</Link>
        </div>

        <div className='hud'>
          <p className='health-bar'>Health: {health}</p>
          <i class="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default Salvage
