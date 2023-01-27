// @types/app.ctx.ts
export type AppSettingsType = {
  darkMode: boolean;
};

export type AppPokemonType = {
  selected: number | null;
  searchTerm: string;
  offset: number;
};

export type AppContextType = {
  settings: AppSettingsType;
  pokemon: AppPokemonType;
  toggleDarkMode: () => void;
  setSelectedPokemon: (id: number | null) => void;
  setSearchTerm: (text: string) => void;
  setOffset: (number: number) => void;
};
