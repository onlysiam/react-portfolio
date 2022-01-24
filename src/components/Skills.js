import React from "react";
import react from "../img/react.png";
import js from "../img/js.png";
import html from "../img/html.png";
import scss from "../img/scss.png";
import vue from "../img/vue.png";
import node from "../img/node.png";
import laptop from "../img/laptop.jfif";
import styled from "styled-components";

import { motion } from "framer-motion";
import {
  skillTitleAnimation,
  fadeAnimation,
  slideAnimation,
} from "../animation";

import { useScroll } from "./useScroll";

const Skills = () => {
  const [element, controls] = useScroll();
  return (
    <Skillssection
      variants={fadeAnimation}
      animate={controls}
      initial="hidden"
      ref={element}
      id="skill"
    >
      <div className="laptop">
        <motion.img variants={fadeAnimation} src={laptop} alt="" />
      </div>
      <div className="description">
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="cards">
          <div className="upper row">
            <motion.div variants={slideAnimation} className="card">
              <div className="icon">
                <img src={react} alt="" />
                <motion.h3 variants={slideAnimation}>React</motion.h3>
              </div>
              <motion.p variants={skillTitleAnimation}>- JSX</motion.p>
              <motion.p variants={skillTitleAnimation}>- Router Dom</motion.p>
              <motion.p variants={skillTitleAnimation}>- Redux</motion.p>
            </motion.div>
            <motion.div variants={slideAnimation} className="card">
              <div className="icon">
                <img src={js} alt="" />
                <motion.h3 variants={slideAnimation}>JavaScript</motion.h3>
              </div>
              <motion.p variants={skillTitleAnimation}>- ES5, ES6</motion.p>
              <motion.p variants={skillTitleAnimation}>
                - Error Handling
              </motion.p>
              <motion.p variants={skillTitleAnimation}>
                - DOM Manipulation
              </motion.p>
            </motion.div>
          </div>
          <div className="middle row">
            <motion.div variants={slideAnimation} className="card">
              <div className="icon">
                <img src={vue} alt="" />
                <motion.h3 variants={slideAnimation}>Vue.js</motion.h3>
              </div>
              <motion.p variants={skillTitleAnimation}>- Learning</motion.p>
            </motion.div>
            <motion.div variants={slideAnimation} className="card">
              <div className="icon">
                <img src={node} alt="" />
                <motion.h3 variants={slideAnimation}>Node.JS</motion.h3>
              </div>
              <motion.p variants={skillTitleAnimation}>- Express</motion.p>
              <motion.p variants={skillTitleAnimation}>- Axios</motion.p>
            </motion.div>
          </div>
          <div className="lower row">
            <motion.div variants={slideAnimation} className="card">
              <div className="icon">
                <img src={html} alt="" />
                <motion.h3 variants={slideAnimation}>HTML & Css</motion.h3>
              </div>
              <motion.p variants={skillTitleAnimation}>- HTML5</motion.p>
              <motion.p variants={skillTitleAnimation}>
                - Responsive Design
              </motion.p>
              <motion.p variants={skillTitleAnimation}>
                - Built From Scratch
              </motion.p>
            </motion.div>
            <motion.div variants={slideAnimation} className="card">
              <div className="icon">
                <img src={scss} alt="" />
                <motion.h3 variants={slideAnimation}>Sass</motion.h3>
              </div>
              <motion.p variants={skillTitleAnimation}>- Mapping</motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </Skillssection>
  );
};

const Skillssection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 15vw 15rem 15vw;
  z-index: 2;
  .laptop {
    z-index: 2;
    img {
      z-index: 2;
      height: 25rem;
    }
  }
  .description {
    z-index: 2;
    .title {
      h1 {
        font-size: 10rem;
        font-weight: 800;
        color: #03e8b9;
      }
      h2 {
        margin-bottom: 2rem;
        font-size: 4rem;
        font-weight: 600;
        color: #70e8fd;
      }
    }
    .cards {
      z-index: 2;
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      .row {
        display: flex;
      }
      .card {
        display: flex;
        width: 15rem;
        flex-direction: column;
        margin-top: 3rem;
        margin-right: 5rem;
        .icon {
          display: flex;
          align-items: center;
          padding-bottom: 10px;
        }
        h3 {
          padding-left: 10px;
          font-size: 1.7rem;
          font-weight: 400;
          color: #72d9ff;
        }
        p {
          padding-left: 20px;
          font-size: 1.2rem;
          font-weight: 200;
          color: #cdffff;
        }
        img {
          height: 4rem;
        }
      }
    }
  }
`;
export default Skills;
