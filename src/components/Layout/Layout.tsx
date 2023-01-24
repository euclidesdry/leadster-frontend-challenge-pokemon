import React, { PropsWithChildren } from 'react';
import { Layout } from './styles';

type AppLayoutProps = PropsWithChildren & {
  rtl?: boolean;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Layout className='app-container' data-testid='Layout-component'>
      {children}
    </Layout>
  );
}
