import React from 'react';
import logo from './logo.svg';
import AppRoutes from './routes/router';

export default function App() {
  return (
    <div className='App' data-testid='App'>
      <header className='App-header' />
      <AppRoutes />
    </div>
  );
}
