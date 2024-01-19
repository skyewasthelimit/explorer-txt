import './App.css';
import React from 'react';
import Start from './components/Start';
import Level1 from './components/Level1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Explorer() {

  return (<Router>

    <div className="main">
      <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Level1" element={<Level1 />} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default Explorer;
