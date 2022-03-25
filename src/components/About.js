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
            <p>
              I am a Full Stack Web Developer focusing on front-end
              technologies.
            </p>
          </motion.div>
          <motion.div variants={cardAnimation} className="card">
            <h3>Proficiency</h3>
            <p>
              I have a decent knowledge of React.js, Node.js, HTML5, CSS &
              front-end designs.{" "}
            </p>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 15vw 0rem 15vw;

  margin-bottom: 7rem;
  z-index: 2;
  .description {
    z-index: 2;
    .title {
      h1 {
        font-size: 8rem;
        font-weight: 800;
        color: #03e8b9;
      }
      h2 {
        margin: 1rem 0rem 2.5rem 0rem;
        font-size: 3rem;
        font-weight: 600;
        color: #70e8fd;
      }
    }
    .cards {
      display: flex;
      flex-direction: row;
      .card {
        padding: 10px;
        background-color: #282f51;

        background: linear-gradient(340deg, #282f51, rgba(66, 66, 66, 0));
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
        margin-top: 10px;
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

  @media (max-width: 1650px) {
    padding: 5rem 10vw 0rem 10vw;
    margin-bottom: 7rem;
    .image {
      z-index: 2;
      img {
        height: 45rem;
      }
    }
  }
  @media (max-width: 1450px) {
    padding: 5rem 8vw 0rem 8vw;
    margin-bottom: 13rem;
    .description {
      .title {
        h1 {
          font-size: 8rem;
        }
        h2 {
          margin: 1rem 0rem 2.5rem 0rem;
          font-size: 3rem;
        }
      }
      .card {
        h3 {
          font-size: 1rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
    .image {
      z-index: 2;
      img {
        height: 40rem;
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 9rem 6vw 0rem 6vw;
    margin-bottom: 7rem;
    .description {
      .title {
        h1 {
          font-size: 7rem;
        }
        h2 {
          margin: 1rem 0rem 2.5rem 0rem;
          font-size: 2rem;
        }
      }
      .card {
        h3 {
          font-size: 1rem;
        }
        p {
          font-size: 0.7rem;
        }
      }
    }
    .image {
      z-index: 2;
      img {
        height: 38rem;
      }
    }
  }

  @media (max-width: 1000px) {
    .description {
      .title {
        h1 {
          font-size: 5rem;
        }
        h2 {
          margin: 0.7rem 0rem;
          font-size: 2rem;
        }
      }
      .cards {
        flex-direction: column;
        .card {
          margin-top: 1rem;
          width: 80%;
          h3 {
            font-size: 1rem;
          }
          p {
            font-size: 0.8rem;
          }
        }
      }
    }
    .image {
      position: absolute;
      right: 5%;
      z-index: 20;
      img {
        height: 30rem;
      }
    }
  }

  @media (max-width: 700px) {
    .description {
      .title {
        h1 {
          font-size: 4rem;
        }
        h2 {
          margin: 0.7rem 0rem;
          font-size: 1.5rem;
        }
      }
      .cards {
        flex-direction: column;
        z-index: 20;
        .card {
          margin-top: 1rem;
          width: 80%;
          h3 {
            font-size: 1rem;
          }
          p {
            font-size: 0.8rem;
          }
        }
      }
    }
    .image {
      position: absolute;
      top: 12%;
      right: 1%;
      z-index: 2;
      img {
        height: 25rem;
      }
    }
  }
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18rem 5vw 0rem 5vw;
    margin-bottom: 7rem;
    .description {
      width: 90vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0 10vw;
      .cards {
        display: flex;
        width: 90vw;
      }
    }
    .image {
      position: absolute;
      top: 15%;
      right: 1%;
      z-index: 1;
      img {
        height: 22rem;
      }
    }
  }
`;

export default About;
