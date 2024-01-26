import React, { useState } from 'react'
import { useHealth, useCredits, useFuel, usePlanet } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'
import { PLANETS } from '../constants/planets';
import { SALVAGE_ITEMS } from '../constants/salvageItems';

const MissionResults = () => {
  const [salvageItems, showSalvageItems] = useState(true)
  const [results, showResults] = useState(false)
  const [returnbutton, showReturnButton] = useState(false)
  const [next, showNext] = useState(true)

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();
  const { planet, updatePlanet } = usePlanet();

  const consumeFuel = () => {
    console.log(fuelUsed)
    updateFuel(-fuelUsed)
   }

const fuelUsed = Math.round(PLANETS[planet].distance / 8);

const handleShowResults = () => {
  consumeFuel();
  showSalvageItems(false);
  showResults(true);
  showNext(false);
  showReturnButton(true);
}

  return (
    <div className='start-wrapper'>
      <img className="retro-overlay" src="/images/retro_overlay.png" alt="Retro Overlay" />
      <div className='start'>
          <div className='mission-results-box'>
              {salvageItems && <div className='salvage-items-result'>On your mission you found:</div>}
              {salvageItems && <div className='salvage-items'>
                </div>}
              {results && <div className='result-text'>Salvage Items Found: <span className='results-number'>99</span></div>}
              {results && <div className='result-text'>Fuel used: <span className='results-number'>{fuelUsed}</span></div>}
              {results && <div className='result-text'>Damage taken: <span className='results-number'>99</span></div>}
              {results && <div className='result-text'>Distance travelled: <span className='results-number'>{PLANETS[planet].distance} Light Years</span></div>}
              {results && <div className='result-text'>Credits gained: <span className='results-number'>99</span></div>}
          </div>
          {next && <div className='mission-begin' onClick={handleShowResults}>Next</div>}
          {returnbutton && <Link to="/MainMenu" className='intro-btn'>Return</Link>}
        <div className='hud'>
          <p className='health-bar'>✚Health: {health}</p>
          <i className="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default MissionResults;