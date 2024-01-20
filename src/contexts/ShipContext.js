import React, { createContext, useContext, useState } from 'react';

const ShipContext = createContext();

export const ShipProvider = ({ children }) => {
  const [ship, setShip] = useState(100);

  const updateShip = (amount) => {
    setShip((prevShip) => Math.max(0, Math.min(100, prevShip + amount)));
  };

  return (
    <ShipContext.Provider value={{ ship, updateShip}}>
      {children}
    </ShipContext.Provider>
  );
};

export const useShip = () => {
  const context = useContext(ShipContext);
  if (!context) {
    throw new Error('useShip must be used within a ShipProvider');
  }
  return context;
};