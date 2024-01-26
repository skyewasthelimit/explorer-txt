import React, { useState } from 'react'
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'

const MissionResults = () => {

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();

  return (
    <div className='start-wrapper'>
      <img className="retro-overlay" src="/images/retro_overlay.png" alt="Retro Overlay" />
      <div className='start'>
          <div className='mission-results-box'>
              <div className='result-text'>Salvage: <span className='results-number'>99</span></div>
              <div className='result-text'>Fuel used: <span className='results-number'>99</span></div>
              <div className='result-text'>Damage taken: <span className='results-number'>99</span></div>
              <div className='result-text'>Distance travelled: <span className='results-number'>99</span></div>
              <div className='result-text'>Credits gained: <span className='results-number'>99</span></div>
          </div>
          <Link to="/MainMenu" className='intro-btn'>Return</Link>
        <div className='hud'>
          <p className='health-bar'>✚Health: {health}</p>
          <i class="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default MissionResults;