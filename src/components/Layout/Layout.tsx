import React, { PropsWithChildren } from 'react';
import { Layout } from './styles';
import Header from '../Header';

type AppLayoutProps = PropsWithChildren & {
  rtl?: boolean;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      <Header />
      <Layout className='app-container' data-testid='Layout-component'>
        {children}
      </Layout>
    </div>
  );
}
