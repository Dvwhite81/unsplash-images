export type AppContextType = {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export type ImageType = {
  urls?: {
    regular: string;
  };
  id: string;
  description: string;
};
