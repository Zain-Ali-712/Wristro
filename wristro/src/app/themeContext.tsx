'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  changeTheme: (newTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('theme-1');

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.className = newTheme; // Apply theme class to html
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.error('useTheme must be used within a ThemeProvider');
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};