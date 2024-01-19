import './App.css';
import React from 'react';
import Start from './components/Start';
import Intro from './components/Intro';
import Ship from './components/Ship';
import { HealthBarProvider } from './contexts/HealthBarContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Explorer() {

  return (<Router>
<HealthBarProvider>
    <div className="main">
      <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Ship" element={<Ship />} />
      </Routes>
      </div>
    </div>
    </HealthBarProvider>
    </Router>
  );
}

export default Explorer;
