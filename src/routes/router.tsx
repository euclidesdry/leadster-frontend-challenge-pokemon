import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import About from './About';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path='pokemon' element={<Pokemon />} /> */}
        {/* <Route path='about' element={<About />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path='*' element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}
