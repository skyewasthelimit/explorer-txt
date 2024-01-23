import './App.css';
import React, { useEffect } from 'react';
import Start from './components/Start';
import Intro from './components/Intro';
import Ship from './components/Ship';
import Station from './components/Station';
import Salvage from './components/Salvage';
import Mission from './components/Mission';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GameStateProvider } from './contexts/GameStateContext';
// TODO: Make Routes more dynamic
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
                <Route path="/Salvage" element={<Salvage />} />
                <Route path="/Mission" element={<Mission />} />
              </Routes>
            </div>
          </div>
        </GameStateProvider>
  </Router>
  );
}

export default Explorer;
