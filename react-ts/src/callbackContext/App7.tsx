import React from 'react';
import Hooks from './Hooks';
import ThemeProvider from './ThemeProvider'

const App7 = () => {
  return (
    <div>
      <ThemeProvider>
        <Hooks />
      </ThemeProvider>
    </div>

  );
};

export default App7;
