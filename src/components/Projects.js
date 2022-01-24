import React from "react";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const Projects = () => {
  return (
    <div className="projects">
      <div className="nsuaide"></div>
      <div className="weathercloset"></div>
      <div className="cgpa101"></div>
      <div className="greentouch"></div>
      <div className="surela"></div>
      <div className="expensereport"></div>
    </div>
  );
};

export default Projects;
