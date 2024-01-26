import React, { createContext, useContext, useState } from 'react';
import { PLANETS } from '../constants/planets';

const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {

  const [maxfuel, setMaxFuel] = useState(100)
  const [fuel, setFuel] = useState(maxfuel);
  const [health, setHealth] = useState(100);
  const [credits, setCredits] = useState(250);
  const [planet, setCurrentPlanet] = useState(null)
  
  const updateCredits = (amount) => {
    setCredits((prevCredits) => Math.max(0, Math.min(250,
      prevCredits + amount)));
  };

  const updateHealth = (amount) => {
    setHealth((prevHealth) => Math.max(0, Math.min(10000,
       prevHealth + amount)));
  };

  const updateFuel = (amount) => {
    setFuel((prevFuel) => Math.max(0, Math.min(10000,
       prevFuel + amount)));
  };

  const updatePlanet = () => {
    setCurrentPlanet(Math.floor(Math.random() * 9));
};

  return (
    <GameStateContext.Provider value={{
      fuel, updateFuel,
      health, updateHealth, credits, updateCredits,
      maxfuel, setMaxFuel, updatePlanet, planet
    }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useFuel = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useFuel must be used within a GameStateProvider');
  }
  return context;
};

export const useCredits = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useCredits must be used within a CreditsProvider');
  }
  return context;
};

export const useHealth = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useHealth must be used within a HealthProvider');
  }
  return context;
};

export const usePlanet = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('usePlanet must be used within a PlanetProvider');
  }
  return context;
};