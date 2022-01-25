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
  console.log(element);
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
  padding: 5rem 15vw 0rem 15vw;
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

  @media (max-width: 1850px) {
    padding: 5rem 10vw 0rem 10vw;
  }
  @media (max-width: 1600px) {
    padding: 5rem 10vw 0rem 10vw;
    .laptop {
      img {
        height: 20rem;
      }
    }
    .description {
      .title {
        h2 {
          font-size: 4rem;
        }
      }
      .cards {
        .card {
          h3 {
            font-size: 1.5rem;
          }
          p {
            font-size: 1rem;
          }
          img {
            height: 4rem;
          }
        }
      }
    }
  }
  @media (max-width: 1400px) {
    padding: 5rem 8vw 0rem 8vw;
    .laptop {
      img {
        height: 20rem;
      }
    }
    .description {
      .title {
        h2 {
          font-size: 3.5rem;
        }
      }
      .cards {
        .card {
          margin-right: 1rem;
          h3 {
            font-size: 1.5rem;
          }
          p {
            font-size: 1rem;
          }
          img {
            height: 4rem;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 5rem 8vw 0rem 8vw;
    .laptop {
      img {
        height: 20rem;
      }
    }
    .description {
      .title {
        h2 {
          font-size: 3.1rem;
        }
      }
      .cards {
        .card {
          width: 10rem;
          margin-right: 4rem;
          h3 {
            font-size: 1.5rem;
          }
          p {
            font-size: 1rem;
          }
          img {
            height: 3rem;
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    padding: 3rem 6vw 0rem 6vw;
    .laptop {
      img {
        height: 16rem;
      }
    }
    .description {
      .title {
        h2 {
          font-size: 2.9rem;
        }
      }
      .cards {
        .card {
          width: 8rem;
          margin-right: 3rem;
          h3 {
            font-size: 1.2rem;
          }
          p {
            font-size: 0.8rem;
          }
          img {
            height: 3rem;
          }
        }
      }
    }
  }
  @media (max-width: 850px) {
    padding: 3rem 3vw 0rem 3vw;
    .description {
      .title {
        h2 {
          font-size: 2.9rem;
          margin-bottom: 1rem;
        }
      }
      .cards {
        .card {
          width: 8rem;
          margin-right: 3rem;
          margin-top: 1rem;
          h3 {
            font-size: 1.2rem;
          }
          p {
            font-size: 0.8rem;
          }
          img {
            height: 3rem;
          }
        }
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    .laptop {
      img {
        display: none;
      }
    }
    .description {
      .title {
        h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
      }
      .cards {
        .card {
          width: 8rem;
          margin-right: 3rem;
          margin-top: 1rem;
          h3 {
            font-size: 1.2rem;
          }
          p {
            font-size: 0.8rem;
          }
          img {
            height: 3rem;
          }
        }
      }
    }
  }
`;
export default Skills;
