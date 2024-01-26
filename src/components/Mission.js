import React, { useState } from 'react'
import { useHealth, useCredits, useFuel, usePlanet } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'
import { PLANETS } from '../constants/planets';

const Mission = () => {

  const [currentPlanet, setCurrentPlanet] = useState(null)
  const [launch, setShowLaunch] = useState(true);
  const [missionover, showMissionOver] = useState(false);
  const [results, showResults] = useState(false);

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();
  const { planet, updatePlanet } = usePlanet();


  const startLaunch = () => {
    showMissionOver(true);
    setShowLaunch(false);

    setTimeout(() => {
      showMissionOver(false);
      showResults(true);
    }, 14500);
  }

  return (
    <div className='start-wrapper'>
      <img className="retro-overlay" src="/images/retro_overlay.png" alt="Retro Overlay" />
      <div className='start'>
      {launch && <div className='mission-begin' onClick={startLaunch}>LAUNCH</div>}
      {launch && <div className='mission-briefing-container'>
          {launch && <div className='planet-name-text'>Planet: {PLANETS[planet].name}</div>}
          {launch && <div className='planet-name-text'>Hazard Lvl: {PLANETS[planet].hazardLevel}</div>}
          {launch && <div className='planet-name-text'>Distance: {PLANETS[planet].distance} Light Years</div>}
          {launch && <div className='mission-name-text'>{PLANETS[planet].description}</div>}
        </div> }
        <div className='mission-container'>
          {missionover && <div className='ship'></div>}
          {missionover && <div className='planet'></div>}
          {results && <Link to="/MissionResults" className='mission-results-btn'>Mission Results</Link>}
        </div>
        <div className='hud-mission'>
          <p className='health-bar'>✚Health: {health}</p>
          <i class="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default Mission