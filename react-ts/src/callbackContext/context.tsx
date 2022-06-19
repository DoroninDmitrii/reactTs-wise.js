import { createContext } from "react";
import themes from "./types";

const ThemeContext = createContext({ theme: themes.dark, toggle: () => {} });

export default ThemeContext;
