import React, { useState } from 'react';
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';

const Start = () => {

  const [buttonVisible, setButtonVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();

  const gameStart = () => {
    window.location = '/Intro';
  }

  const hideButton = () => {
    setButtonVisible(false);
    if (buttonVisible === true) {
      setLoading(true);
    }
    setTimeout(gameStart, 5000)
  }

  return (
    <div className='start-wrapper'>
      <img className="retro-overlay" src="/images/retro_overlay.png" alt="Retro Overlay" />
      <div className='start'>
        {buttonVisible && <div id='start-btn' onClick={hideButton}>Start</div>}
        {loading && 
        <div className='loading-wrapper'>
        <div className='loading-text'>Loading...</div>
        <div className='loading-block'></div>
        </div>
        }
      </div>
    </div>
  )
}

export default Start
