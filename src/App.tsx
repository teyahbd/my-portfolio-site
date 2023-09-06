import "./App.css";
import Header from "./organisms/Header/Header";
import Contact from "./organisms/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import CreditFooter from "./molecules/CreditFooter/CreditFooter";
import Experience from "./pages/Experience/Experience";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
      <Projects />
      <footer>
        <Contact />
        <CreditFooter />
      </footer>
    </>
  );
}

export default App;
