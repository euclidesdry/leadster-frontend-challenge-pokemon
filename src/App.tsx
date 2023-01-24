import React from 'react';
import AppRoutes from './routes/router';
import Header from './components/Header';

import './assets/styles/global.scss';

export default function App() {
  return (
    <div className='app' data-testid='App'>
      <Header />
      <AppRoutes />
    </div>
  );
}
