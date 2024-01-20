import React, { createContext, useContext, useState } from 'react';

const CreditsContext = createContext();

export const CreditsProvider = ({ children }) => {
  const [credits, setCredits] = useState(250);

  const updateCredits = (amount) => {
    setCredits((prevCredits) => Math.max(0, Math.min(250, prevCredits + amount)));
  };

  return (
    <CreditsContext.Provider value={{ credits, updateCredits }}>
      {children}
    </CreditsContext.Provider>
  );
};

export const useCredits = () => {
  const context = useContext(CreditsContext);
  if (!context) {
    throw new Error('useCredits must be used within a CreditsProvider');
  }
  return context;
};