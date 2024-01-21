import React, { createContext, useContext, useState } from 'react';

const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
  const [health, setHealth] = useState(100);

  const updateHealth = (amount) => {
    setHealth((prevHealth) => Math.max(0, Math.min(10000, prevHealth + amount)));
  };

  return (
    <HealthContext.Provider value={{ health, updateHealth }}>
      {children}
    </HealthContext.Provider>
  );
};

export const useHealth = () => {
  const context = useContext(HealthContext);
  if (!context) {
    throw new Error('useHealth must be used within a HealthProvider');
  }
  return context;
};