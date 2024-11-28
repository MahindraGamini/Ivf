import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import IVFCalculator from './pages/Caluculator';
import Results from './pages/Results';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<IVFCalculator />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
