import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import ThemeContext from "./Theme/Theme";

const getTheme = (mode) => 
  createTheme({
    palette: {
      mode,
      header: {
        main: mode === "light" ? "#fff" : "#000",
      },
      gray: {
        background: mode === "light" ? "#fff" : "#424242",
        color: mode == 'light' ? '#000' : 'rgba(255, 255, 255, 0.7)',
      }
    }
  })


function App() {
  const [mode, setMode] = useState('light');

  return (
    <ThemeContext.Provider value={{mode, toggleMode: () => setMode(mode === 'light' ? 'dark' : 'light')}}>
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline/>

        <header>
          <Header/>
        </header>

        <main>
          <Hero/>

          <Cards/>
        </main>

        <footer>
          <Footer/>
        </footer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
