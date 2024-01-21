import './App.css';
import React from 'react';
import Start from './components/Start';
import Intro from './components/Intro';
import Ship from './components/Ship';
import Station from './components/Station';

import { CreditsProvider } from './contexts/CreditsContext';
import { ShipProvider } from './contexts/ShipContext';
import { HealthProvider } from './contexts/HealthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Explorer() {

  return (<Router>
    <HealthProvider>
      <ShipProvider>
        <CreditsProvider>
          <div className="main">
            <div>
              <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/Intro" element={<Intro />} />
                <Route path="/Ship" element={<Ship />} />
                <Route path="/Station" element={<Station />} />
              </Routes>
            </div>
          </div>
        </CreditsProvider>
      </ShipProvider>
    </HealthProvider>
  </Router>
  );
}

export default Explorer;
