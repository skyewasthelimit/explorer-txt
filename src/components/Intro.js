import React, { useState } from 'react'
import { useHealth } from '../contexts/HealthContext';
import { useShip } from '../contexts/ShipContext';
import { useCredits } from '../contexts/CreditsContext';

const Intro = () => {
  const [introtext, showIntroText] = useState(true);
  const [text1, showText1] = useState(false);
  const [introbutton, showIntroButton] = useState(false)

  const { health, updateHealth } = useHealth();
  const { ship, updateShip } = useShip();
  const { credits, updateCredits } = useCredits();


  const handleShowText1 = () => {
    setTimeout(showIntroText, 5000)
    showIntroText(false)
    showText1(true)
    if (text1 === true) {
      showIntroButton(true)
    }
  }

  return (
    <div className='start-wrapper' onClick={handleShowText1}>
      <div className='start'>
        {introtext && <div class="level-text">Greetings - and welcome to Explorer.txt</div>}
        {text1 && <div class="text-1">Please choose one of the following:</div>}
        <div className='intro-choices'>
          {introbutton && <a href="/Ship"><button className='intro-btn'>Go to Ship</button></a>}
          {introbutton && <a href="/Station"><button className='intro-btn'>Go to Station</button></a>}
          {introbutton && <button className='intro-btn'>Go Salvage</button>}
        </div>
        <div className='hud'>
          <p className='health-bar'>Health: {health}</p>
          <i class="fa-brands fa-space-awesome">{ship}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default Intro
