// @types/app.ctx.ts
export type AppSettingsType = {
  darkMode: boolean;
};

export type AppPokemonType = {
  selected: number | null;
};

export type AppContextType = {
  settings: AppSettingsType;
  pokemon: AppPokemonType;
  toggleDarkMode: () => void;
  setSelectedPokemon: (id: number | null) => void;
};
