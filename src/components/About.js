import React from "react";
import profile1 from "../img/profile1.png";

import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, cardAnimation } from "../animation";

import styled from "styled-components";
import Wave from "./Wave";
const About = () => {
  return (
    <Aboutsection
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      id="about"
    >
      <div className="description">
        <div className="title">
          <div className="collapse">
            <motion.h1 variants={titleAnimation}>Hello</motion.h1>
          </div>
          <div className="collapse">
            <motion.h2 variants={titleAnimation}>I'm Siam Ahmed</motion.h2>
          </div>
        </div>

        <div className="cards">
          <motion.div variants={cardAnimation} className="card">
            <h3>Web Developer</h3>
            <p>Passionate about front-end designing & programming.</p>
          </motion.div>
          <motion.div variants={cardAnimation} className="card">
            <h3>Proficiency</h3>
            <p>I have a decent knowledge about HTML5,Sass, ReactJS. </p>
          </motion.div>
          <motion.div variants={cardAnimation} className="card">
            <h3>NSUer</h3>
            <p>Graduated from North South University.</p>
          </motion.div>
        </div>
      </div>
      <div className="image">
        <img src={profile1} alt="" />
      </div>
      <Wave />
    </Aboutsection>
  );
};

const Aboutsection = styled(motion.div)`
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 5rem 15vw 13rem 15vw;
  z-index: 2;
  .description {
    z-index: 2;
    .title {
      h1 {
        font-size: 10rem;
        font-weight: 800;
        color: #03e8b9;
      }
      h2 {
        margin: 2rem 0rem;
        font-size: 4rem;
        font-weight: 600;
        color: #70e8fd;
      }
    }
    .cards {
      display: flex;
      .card {
        padding: 10px;
        background-color: #282f51;
        margin-right: 1rem;
      }
      h3 {
        font-size: 1.7rem;
        font-weight: 400;
        color: #72d9ff;
      }
      p {
        font-size: 1.2rem;
        font-weight: 200;
        color: #cdffff;
      }
    }
  }
  .image {
    z-index: 2;
    img {
      height: 50rem;
    }
  }
`;

export default About;
