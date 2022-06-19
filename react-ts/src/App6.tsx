import React, { createContext, useContext, useState } from 'react';


interface Theme {
  color: string,
  background: string,
}

type AvailableThemes = 'light' | 'dark'

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

const ThemeContext = createContext({ theme: themes.dark, toggle: () => {} });

const ThemeProvider: React.FC<any> = ({ children } ) => {

const [currentTheme, setCurrentTheme] = useState<AvailableThemes>('dark')

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], toggle: () => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')}}>
      { children }
    </ThemeContext.Provider>
  )
}

const Hooks = () => {
  
  const { theme, toggle } = useContext(ThemeContext)

  return (
    <button onClick={() => toggle() } style={{ background: theme.background, color: theme.color }}>
      some button
    </button>

  );
};


const App6 = () => {
  return (
    <div>
      <ThemeProvider>
        <Hooks />
      </ThemeProvider>
    </div>

  );
};

export default App6;
