import { createContext, ReactNode, useEffect, useState } from 'react';
import { AppContextType } from './types';
import { getInitialDarkMode } from './helpers';

export const AppContext = createContext<AppContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('darkTheme', `${newTheme}`);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
