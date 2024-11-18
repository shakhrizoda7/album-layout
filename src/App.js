import { CssBaseline } from "@mui/material";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
