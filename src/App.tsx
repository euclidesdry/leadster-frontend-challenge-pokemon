import React from 'react';
import AppRoutes from './routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './assets/styles/global.scss';
import { useAppContext } from './contexts/App';

const queryClient = new QueryClient();

export default function App() {
  const { settings } = useAppContext();
  const appThemeMode = settings.darkMode ? 'dark' : 'light';

  return (
    <div className='app' data-testid='App' data-theme={appThemeMode}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}
