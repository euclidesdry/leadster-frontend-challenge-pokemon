/* eslint-disable sort-keys */
import * as React from 'react';
import { AppContextType, AppPokemonType, AppSettingsType } from '../../types/app.ctx';

export const AppContext = React.createContext<AppContextType | null>(null);

type AppProviderProps = React.PropsWithChildren;

export default function AppProvider({ children }: AppProviderProps) {
  const [settings, setSettings] = React.useState<AppSettingsType>({
    darkMode: false,
  });

  const [pokemon, setPokemon] = React.useState<AppPokemonType>({
    selected: null,
    searchTerm: '',
    offset: 0,
  });

  const toggleDarkMode = React.useCallback(() => {
    setSettings((oldSettings) => ({
      ...oldSettings,
      darkMode: !settings.darkMode,
    }));
  }, [settings.darkMode]);

  const setSelectedPokemon = React.useCallback((id: number | null) => {
    setPokemon((oldPokemon) => ({
      ...oldPokemon,
      selected: id,
    }));
  }, []);

  const setSearchTerm = React.useCallback((text: string) => {
    setPokemon((oldTerm) => ({
      ...oldTerm,
      searchTerm: text,
    }));
  }, []);

  const setOffset = React.useCallback((number: number) => {
    setPokemon((oldPokemon) => ({
      ...oldPokemon,
      offset: number,
    }));
  }, []);

  const values = React.useMemo<AppContextType>(
    () => ({
      pokemon,
      settings,
      toggleDarkMode,
      setSelectedPokemon,
      setSearchTerm,
      setOffset,
    }),
    [pokemon, setOffset, setSearchTerm, setSelectedPokemon, settings, toggleDarkMode]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return React.useContext(AppContext) as AppContextType;
}
