import React, { useState } from 'react'
import { useHealth, useCredits, useFuel } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'
import Settings from './Settings';
// import theme from "./sounds/explorer_mission_theme.mp3";


const Intro = () => {
  const [introtext, showIntroText] = useState(true);
  const [text1, showText1] = useState(false);
  const [introbutton, showIntroButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();

  // const playMusic = () => {
  // new Audio(theme).play()
  // Audio.loop = true;
  // }; *music logic commented out for later*

  const handleMenuOpen = () => {
    setShowMenu(!showMenu);
  }

  const handleShowText1 = () => {
    setTimeout(showIntroText, 5000)
    showIntroText(false)
    showText1(true)
    showIntroButton(true);
  }

  return (

    <div className='start-wrapper' onClick={handleShowText1}>
      {
        showMenu && <div className='settings-wrapper2'
          onClick={handleMenuOpen}><Settings /></div>
      }
      <img className="retro-overlay" src="/images/retro_overlay.png"
        alt="Retro Overlay" />
      <div className='start'>
        {
          introtext && <div class="level-text">
            Greetings - and welcome to Explorer.txt</div>
        }
        {
          text1 && <div class="text-1">
            Please choose one of the following:</div>
        }
        <div className='intro-choices'>
          {
            introbutton && <Link to="/Ship" className='intro-btn'>
              Go to Ship</Link>
          }
          {
            introbutton && <Link to="/Station" className='intro-btn'>
              Go to Station</Link>
          }
          {introbutton && <Link to="/Salvage" className='intro-btn'>
            Go Salvage</Link>}
        </div>
        <div className='hud'>
          <p className='health-bar'>✚Health: {health}</p>
          <i className="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
          <div className='settings-toggle' onClick={handleMenuOpen}>
            Menu</div>
        </div>
      </div>
    </div>

  )
}

export default Intro
