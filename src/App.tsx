import "./App.css";
import About from "./components/About";
import Enquiry from "./components/Enquiry";
import Events from "./components/Events";
import Execs from "./components/Execs";
import Footer from "./components/Footer";
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
      <Enquiry />
      <Footer />
    </>
  );
}

export default App;
