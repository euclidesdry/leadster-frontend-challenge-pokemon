import React, { ReactElement } from 'react';
// eslint-disable-next-line import/named
import { RenderOptions, render } from '@testing-library/react';
import AppProvider from '../contexts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function AllTheProviders({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>{children}</AppProvider>;
    </QueryClientProvider>
  );
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/export
export * from '@testing-library/react';
// eslint-disable-next-line import/export
export { customRender as render };
