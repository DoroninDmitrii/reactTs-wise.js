import React from "react";
import { useState, useCallback } from "react";
import ThemeContext from "./context";

interface Theme {
  color: string,
  background: string,
}

type AvailableThemes = 'light' | 'dark';

const themes: Record<AvailableThemes, Theme> = {
  light: {
    color: '#000000',
    background: '#eeeeee'
  },
  dark: {
    color: '#ffffff',
    background: '#222222'
  }
}

const ThemeProvider: React.FC<any> = ({ children } ) => { 

  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>('dark');
  
  const toggle = useCallback<() => void>(() => {
    console.log('dsd') 
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }, [currentTheme]);
  
    return (
      <ThemeContext.Provider value={{ theme: themes[currentTheme], toggle: toggle }}>
        { children }
      </ThemeContext.Provider>
    )
  }

export default ThemeProvider;

