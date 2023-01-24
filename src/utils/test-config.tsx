import React, { ReactElement } from 'react';
// eslint-disable-next-line import/named
import { RenderOptions, render } from '@testing-library/react';
import AppProvider from '../contexts';

function AllTheProviders({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <AppProvider>{children}</AppProvider>;
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/export
export * from '@testing-library/react';
// eslint-disable-next-line import/export
export { customRender as render };
