import react from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Profiles from "../components/Profiles";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import Scrolltop from "../components/Scrolltop";
const AboutPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <About />
      <Skills />
      <Projects />
      <Profiles />
      <Scrolltop />
    </motion.div>
  );
};
export default AboutPage;
