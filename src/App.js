import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// npm install react-router-dom

import CallSamplePage from './pages/CallSamplePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CallSamplePage />} />
      </Routes>
    </Router>
  );
}

export default App;
