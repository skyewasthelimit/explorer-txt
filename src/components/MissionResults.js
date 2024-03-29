import React, { useState } from 'react'
import { useHealth, useCredits, useFuel, usePlanet, useSalvageItems } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'
import { PLANETS } from '../constants/planets';
import { SALVAGE_ITEMS } from '../constants/salvageItems';
import { useNavigate } from 'react-router-dom';
import Settings from './Settings';

const MissionResults = () => {
  const navigate = useNavigate();

  const [salvageItemsList, showSalvageItemsList] = useState(true)
  const [results, showResults] = useState(false)
  const [returnbutton, showReturnButton] = useState(false)
  const [next, showNext] = useState(true)
  const [showMenu, setShowMenu] = useState(false);

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();
  const { planet, updatePlanet } = usePlanet();
  const { salvageItems, selectRandomSalvageItems } = useSalvageItems();

  const payment = salvageItems.map((item) => {
    return item.value
  }).reduce((previous, current) => previous + current)

  const consumeResources = () => {
    console.log(fuelUsed)
    updateFuel(-fuelUsed)
    updateCredits(payment)
    updateHealth(-healthDamage)
  }

  const fuelUsed = Math.round(Math.round(PLANETS[planet].distance / 8)
   + Math.random(Math.floor() * 6));

  const healthDamage = Math.round(Math.round(PLANETS[planet].hazardLevel / 8)
   + Math.random(Math.floor() * 8))

  const handleShowResults = () => {
    consumeResources();
    showSalvageItemsList(false);
    showResults(true);
    showNext(false);
    showReturnButton(true);
  }

  const handleGameOver = () => {
    if (health < 1) {
      navigate("/GameOverDied", { replace: true });
    } else if (fuel < 1) {
      navigate("/GameOverFuel", { replace: true });
    } else {
    }
  };

  const handleMenuOpen = () => {
    setShowMenu(!showMenu);
  }

  handleGameOver();

  return (
    <div className='start-wrapper'>
         {
         showMenu && <div className='settings-wrapper2' 
         onClick={handleMenuOpen}><Settings /></div>
         }
      <img className="retro-overlay" src="/images/retro_overlay.png"
        alt="Retro Overlay" />
      <div className='start'>
        <div className='mission-results-box'>
          {
            salvageItemsList &&
            <div className='salvage-items-result'>
              On your mission you found:
              {
                salvageItemsList &&
                salvageItems.map((salvageItem) => {
                  return <div>{salvageItem.name}</div>
                })
              }

            </div>
          }
          {
            salvageItems &&
            <div className='salvage-items'>
            </div>
          }
          {
            results &&
            <div className='result-text'>Salvage Items Found:
              <span className='results-number'>
                {salvageItems.length} Items
                </span>
            </div>
          }
          {
            results &&
            <div className='result-text'>Fuel used:
              <span className='results-number'>
                {fuelUsed} Units
                </span>
            </div>
          }
          {
            results &&
            <div className='result-text'>Damage taken:
              <span className='results-number'>
                {healthDamage} HP
                </span>
            </div>
          }
          {
            results &&
            <div className='result-text'>Distance travelled:
              <span className='results-number'>
                {PLANETS[planet].distance}
                &nbsp;Light Years
                </span>
            </div>
          }
          {
            results &&
            <div className='result-text'>Credits gained:
              <span className='results-number'>
                ${payment}
                </span>
            </div>
          }
        </div>
        {
          next &&
          <div className='mission-next'
            onClick={handleShowResults}>Next
          </div>
        }
        {
          returnbutton &&
          <Link to="/MainMenu"
            className='return-btn'>Return
          </Link>
        }
        <div className='hud'>
          <p className='health-bar'>✚Health: {health}</p>
          <i className="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
          <div className='settings-toggle' 
          onClick={handleMenuOpen}>Menu</div>
        </div>
      </div>
    </div>
  )
}

export default MissionResults;