import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// npm install react-router-dom

import CallSamplePage from './pages/CallSamplePage';
import ButtonPage from './pages/ButtonPage';
import DragDropPage from './pages/DragDropPage';
import NodePage from './pages/NodePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/call" element={<CallSamplePage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/dragdrop" element={<DragDropPage />} />
        <Route path="/node" element={<NodePage />} />
      </Routes>
    </Router>
  );
}

export default App;
