import * as React from 'react';
import { AppContextType, AppType } from '../../types/app.ctx';

export const AppContext = React.createContext<AppContextType | null>(null);

type AppProviderProps = React.PropsWithChildren;

export default function AppProvider({ children }: AppProviderProps) {
  const [settings, setSettings] = React.useState<AppType>({
    darkMode: false,
  });

  const toggleDarkMode = React.useCallback(() => {
    setSettings((oldSettings) => ({
      ...oldSettings,
      darkMode: !settings.darkMode,
    }));
  }, [settings.darkMode]);

  const values = React.useMemo<AppContextType>(
    () => ({
      settings,
      toggleDarkMode,
    }),
    [settings, toggleDarkMode]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return React.useContext(AppContext) as AppContextType;
}
