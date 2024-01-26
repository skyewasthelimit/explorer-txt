import React, { useState } from 'react'
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'
import { PLANETS } from '../constants/planets';


const Salvage = () => {

  const [missionbuttons, showMissionButtons] = useState(true);
  const [confirmtext, showConfirmText] = useState(false);
  const [confirmbutton, showConfirmButton] = useState(false);
  const [missiondescription, showMissionDescription] = useState(false);

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();

  // const randomplanet = Math.floor(Math.random() * 9);

  const confirmMission = () => {
    showMissionButtons(false);
    showConfirmText(true);
    showConfirmButton(true);
    showMissionDescription(true);
  }

  const denyMission = () => {
    showMissionButtons(true);
    showConfirmText(false);
    showConfirmButton(false);
    showMissionDescription(false);
  }

  return (
    <div className='start-wrapper'>
      <img className="retro-overlay"
        src="/images/retro_overlay.png" alt="Retro Overlay" />
      <div className='start'>

        {missiondescription && <div className='mission-name-text'></div>}
        {confirmtext && <div class="mission-confirm-text">
          Are you sure you wish to begin salvage mission?</div>}
        {confirmbutton && <Link to="/Mission"
          className='mission-confirm-btn1'>Yes</Link>}
        {confirmbutton && <div className='mission-confirm-btn2'
          onClick={denyMission}>Go Back</div>}
        {missionbuttons && <div className='mission-btn'
          onClick={confirmMission}>Begin Mission</div>}
        <div className='intro-choices'>
          {missionbuttons && <Link to="/Ship" className='intro-btn'>
            Go to Ship</Link>}
          {missionbuttons && <Link to="/Station" className='intro-btn'>
            Go to Station</Link>}
        </div>

        <div className='hud'>
          <p className='health-bar'>✚Health: {health}</p>
          <i class="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default Salvage
