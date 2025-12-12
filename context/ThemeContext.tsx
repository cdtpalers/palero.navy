import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'tokyo' | 'latte';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('tokyo');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'latte') {
      root.classList.add('latte-theme');
    } else {
      root.classList.remove('latte-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'tokyo' ? 'latte' : 'tokyo');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};