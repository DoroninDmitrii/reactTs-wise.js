import React from "react";
import { useContext } from "react";
import ThemeContext from "./context";

const Hooks = () => {
  
  const { theme, toggle } = useContext(ThemeContext)
  console.log(theme)

  return (
    <button onClick={() => toggle() } style={{ background: theme.background, color: theme.color }}>
      some button
    </button>

  );
};

export default Hooks;
