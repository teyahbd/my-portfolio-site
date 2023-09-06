import "./App.css";
import Header from "./organisms/Header/Header";
import Contact from "./organisms/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import CreditFooter from "./molecules/CreditFooter/CreditFooter";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <footer>
        <Contact />
        <CreditFooter />
      </footer>
    </>
  );
}

export default App;
