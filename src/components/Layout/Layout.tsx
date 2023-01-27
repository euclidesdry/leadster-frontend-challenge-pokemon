import React, { PropsWithChildren } from 'react';
import { Layout, MainContainer } from './styles';
import Header from '../Header';

type AppLayoutProps = PropsWithChildren & {
  theme?: string;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <MainContainer>
      <Header />
      <Layout className='app-container' data-testid='Layout-component'>
        {children}
      </Layout>
    </MainContainer>
  );
}
