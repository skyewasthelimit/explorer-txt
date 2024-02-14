import React from 'react'
import { Link } from 'react-router-dom';

const Settings = () => {

  return (
    <div className='settings-wrapper'>
      <div className='settings-dropdown'>
      <div className='settings-header'>Explorer.txt</div>
        <div className='settings-text'>Sound</div>
        <div className='settings-text'>Blog</div>
        <div className='settings-text'>Stats</div>
        <div className='settings-text'>Donate</div>
        <Link to="/About"><div className='settings-text'>About</div></Link>
        <Link to="/"><div className='settings-text'>Restart</div></Link>
        <div className='settings-text'>Back</div>
      </div>
    </div>
  )
}

export default Settings
