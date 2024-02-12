import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [menuVisible, closeMenuVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='settings-wrapper'>
      <div className='settings-dropdown'>
      <div className='settings-header'>Explorer.txt</div>
        <div className='settings-text'>Sound</div>
        <div className='settings-text'>Blog</div>
        <div className='settings-text'>Stats</div>
        <div className='settings-text'>Donate</div>
        <div className='settings-text'>About</div>
        <div className='settings-text'>Restart</div>
      </div>
    </div>
  )
}

export default Settings
