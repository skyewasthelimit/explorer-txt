import React, { createContext, useContext, useState } from 'react';

const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {

  const [maxfuel, setMaxFuel] = useState(100)
  const [fuel, setFuel] = useState(maxfuel);
  const [health, setHealth] = useState(100);
  const [credits, setCredits] = useState(250);
  
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

  return (
    <GameStateContext.Provider value={{
      fuel, updateFuel,
      health, updateHealth, credits, updateCredits,
      maxfuel, setMaxFuel
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