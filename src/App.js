import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// npm install react-router-dom

import CallSamplePage from './pages/CallSamplePage';
import ButtonPage from './pages/ButtonPage';
import DragDropPage from './pages/DragDropPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CallSamplePage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/dragdrop" element={<DragDropPage />} />
      </Routes>
    </Router>
  );
}

export default App;
