import { createContext } from "react";

const ThemeContext = createContext({
    mode: 'light',
    toggleMode: () => {},
});

export default ThemeContext;