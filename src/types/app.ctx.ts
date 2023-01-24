// @types/app.ctx.ts
export type AppType = {
  darkMode: boolean;
};

export type AppContextType = {
  settings: AppType;
  toggleDarkMode: () => void;
};
