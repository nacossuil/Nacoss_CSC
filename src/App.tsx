import "./App.css";
import About from "./components/About";
import Events from "./components/Events";
import Execs from "./components/Execs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Execs />
      <Events />
    </>
  );
}

export default App;
