import React, { useState } from 'react'
import { useHealthBar } from '../contexts/HealthBarContext';

const Intro = () => {
  const [introtext, showIntroText] = useState(true);
  const [text1, showText1] = useState(false);
  const [introbutton, showIntroButton] = useState(false)

  const { health, updateHealth } = useHealthBar();

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
&         {introbutton && <button className='intro-btn'>Go to ship</button>}
          {introbutton && <button className='intro-btn'>Go to station</button>}
          {introbutton && <button className='intro-btn'>Go Salvage</button>}
        </div>
        <p className='health-bar'>Health: {health}</p>
      </div>
    </div>
  )
}

export default Intro
