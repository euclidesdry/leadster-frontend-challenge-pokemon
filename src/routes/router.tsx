import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import ErrorPage from './Error';
import Details from './Details';
// import About from './About';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/pokemon/:id' element={<Details />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
