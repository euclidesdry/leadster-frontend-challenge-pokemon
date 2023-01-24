import React from 'react';
import AppRoutes from './routes/router';

import './assets/styles/global.scss';
import { useAppContext } from './contexts/App';

export default function App() {
  const { settings } = useAppContext();
  const appThemeMode = settings.darkMode ? 'dark' : 'light';

  return (
    <div className='app' data-testid='App' data-theme={appThemeMode}>
      <AppRoutes />
    </div>
  );
}
