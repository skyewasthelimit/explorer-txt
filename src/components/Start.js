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
      <div className='start'>
        {buttonVisible && <button id='start-btn' onClick={hideButton}>Start</button>}
        {loading && <i class="fa fa-spinner"></i>}
      </div>
    </div>
  )
}

export default Start
