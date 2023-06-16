import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Sponsors from './pages/Sponsors';

export default function App() {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/sponsors' element={<Sponsors />} />
    </Routes>
  );
}
