import { motion, useScroll } from "framer-motion";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Exprerince from "./Components/Exprerince";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="grain-grid" />

      <Nav />
      <div className="container">
        <Home />
        <About />
        <Exprerince />
        <Education />
        <Skill />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
