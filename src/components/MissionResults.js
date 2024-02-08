import React, { useState } from 'react'
import { useHealth, useCredits, useFuel, usePlanet, useSalvageItems } from '../contexts/GameStateContext';
import { Link } from 'react-router-dom'
import { PLANETS } from '../constants/planets';
import { SALVAGE_ITEMS } from '../constants/salvageItems';

const MissionResults = () => {
  const [salvageItemsList, showSalvageItemsList] = useState(true)
  const [results, showResults] = useState(false)
  const [returnbutton, showReturnButton] = useState(false)
  const [next, showNext] = useState(true)

  const { health, updateHealth } = useHealth();
  const { fuel, updateFuel } = useFuel();
  const { credits, updateCredits } = useCredits();
  const { planet, updatePlanet } = usePlanet();
  const { salvageItems, selectRandomSalvageItems } = useSalvageItems();

  const payment = salvageItems.map((item) => {
    return item.value
  }).reduce((previous, current) => previous + current)

  const consumeFuel = () => {
    console.log(fuelUsed)
    updateFuel(-fuelUsed)
    updateCredits(payment)
    updateHealth(-healthDamage)
  }

  const fuelUsed = Math.round(Math.round(PLANETS[planet].distance / 8) + Math.random(Math.floor() * 6));

  const healthDamage = Math.round(Math.round(PLANETS[planet].hazardLevel / 8) + Math.random(Math.floor() * 8))

  const handleShowResults = () => {
    consumeFuel();
    showSalvageItemsList(false);
    showResults(true);
    showNext(false);
    showReturnButton(true);
  }

  const handleGameOver = () => {
    if (health < 1) {
      window.location = "/GameOverDied";
    } else if (fuel < 1) {
      window.location = "/GameOverFuel";
    } else {
    }
  }

  return (
    <div className='start-wrapper'>
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
              <span className='results-number'>{salvageItems.length}</span>
            </div>
          }
          {
            results &&
            <div className='result-text'>Fuel used:
              <span className='results-number'>{fuelUsed}</span>
            </div>
          }
          {
            results &&
            <div className='result-text'>Damage taken:
              <span className='results-number'>{healthDamage}</span>
            </div>
          }
          {
            results &&
            <div className='result-text'>Distance travelled:
              <span className='results-number'>{PLANETS[planet].distance}
                &nbsp;Light Years</span>
            </div>
          }
          {
            results &&
            <div className='result-text'>Credits gained:
              <span className='results-number'>{payment}</span>
            </div>
          }
        </div>
        {
          next &&
          <div className='mission-begin'
            onClick={handleShowResults}>Next
          </div>
        }
        {
          returnbutton &&
          <Link to="/MainMenu"
            className='intro-btn' onClick={handleGameOver}>Return
          </Link>
        }
        <div className='hud'>
          <p className='health-bar'>✚Health: {health}</p>
          <i className="fa-brands fa-space-awesome">{fuel}%</i>
          <p className="credits-bar">${credits}</p>
        </div>
      </div>
    </div>
  )
}

export default MissionResults;