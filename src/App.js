import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Sponsors from './pages/Sponsors';
import Social from './pages/Social';
import News from './pages/News';
import Home from './pages/Home';
import SuccessStories from './pages/SuccessStories';
import Magazine from './pages/Magazine';
import Interviews from './pages/Interviews';
import Resources from './pages/Resources';
import Search from './pages/Search';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/social' element={<Social />} />
      <Route path='/news' element={<News />} />
      <Route path='/success-stories' element={<SuccessStories />} />
      <Route path='/magazine' element={<Magazine />} />
      <Route path='/interviews' element={<Interviews />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/about' element={<About />} />
      <Route path='/sponsors' element={<Sponsors />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  );
}
