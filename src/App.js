import './App.css';
import React from 'react';
import Start from './components/Start';
import Intro from './components/Intro';
import Ship from './components/Ship';
import Station from './components/Station';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GameStateProvider } from './contexts/GameStateContext';

function Explorer() {

  return (<Router>
    
        <GameStateProvider>
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
        </GameStateProvider>
  </Router>
  );
}

export default Explorer;
