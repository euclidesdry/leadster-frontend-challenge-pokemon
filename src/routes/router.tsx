import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import ErrorPage from './Error';
// import About from './About';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      {/* <Route path='/pokemon' element={<Pokemon />} /> */}
      {/* <Route path='/about' element={<About />} /> */}
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
