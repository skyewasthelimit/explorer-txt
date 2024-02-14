import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const GameOverFuel = () => {
  return (
    <div className='start-wrapper'>
      <img className="retro-overlay" src="/images/retro_overlay.png"
        alt="Retro Overlay" />
      <div className='game-over'>
        <div className='game-over-text1'>
          YOUR SHIP RAN OUT OF FUEL
        </div>
        <div className='game-over-text2'>
          GAME OVER
        </div>
        <a className="restart-link" href="/"><div id='restart-btn'>
          Restart?</div></a>
      </div>
    </div>
  )
}

export default GameOverFuel

