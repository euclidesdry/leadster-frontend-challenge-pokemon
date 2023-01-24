import * as React from 'react';
import AppProvider from './App';

type AppMainProviderProps = React.PropsWithChildren;

export default function AppMainProvider({ children }: AppMainProviderProps) {
  return <AppProvider>{children}</AppProvider>;
}
