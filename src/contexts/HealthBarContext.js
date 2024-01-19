import React, { createContext, useContext, useState } from 'react';

const HealthBarContext = createContext();

export const HealthBarProvider = ({ children }) => {
  const [health, setHealth] = useState(100);

  const updateHealth = (amount) => {
    setHealth((prevHealth) => Math.max(0, Math.min(100, prevHealth + amount)));
  };

  return (
    <HealthBarContext.Provider value={{ health, updateHealth }}>
      {children}
    </HealthBarContext.Provider>
  );
};

export const useHealthBar = () => {
  const context = useContext(HealthBarContext);
  if (!context) {
    throw new Error('useHealthBar must be used within a HealthBarProvider');
  }
  return context;
};