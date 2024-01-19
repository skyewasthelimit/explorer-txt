import React from 'react'
import { useHealthBar } from '../contexts/HealthBarContext';

const Ship = () => {

  const { health, updateHealth } = useHealthBar();

  return (
    <div className='start-wrapper'>
      <div className='start'>
        
        <p className='health-bar'>Health: {health}</p>
      </div>
    </div>
  )
}

export default Ship
