import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

function AllTheProviders({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
