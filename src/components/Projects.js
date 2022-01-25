import React from "react";

import styled from "styled-components";

import nsu from "../img/nsu.png";
import wc from "../img/wc.png";
import surela from "../img/surela.png";
import gt from "../img/gt.png";
import cgpa from "../img/cgpa.png";
import git from "../img/git.png";

import { motion } from "framer-motion";
import {
  skillTitleAnimation,
  fadeAnimation,
  slideAnimation,
  fadedSlideLeft,
  fadedSlideRight,
} from "../animation";

import { useScroll } from "./useScroll";
const Projects = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  const [element6, controls6] = useScroll();

  const nsuaideHandler = () => {
    window.open("https://rds.onlysiam.com/");
    console.log("a");
  };

  return (
    <Projectstyle id="project">
      <div className="title">
        <motion.h2
          variants={fadeAnimation}
          animate={controls6}
          initial="hidden"
          ref={element6}
        >
          Latest Projects
        </motion.h2>
      </div>
      <div className="projects">
        <motion.div
          variants={fadedSlideLeft}
          animate={controls1}
          initial="hidden"
          ref={element1}
          className="nsuaide project"
        >
          <div className="img">
            <img src={nsu} alt="" />
          </div>
          <div className="description">
            <h3>NSU Aide</h3>
            <h1>An Web-Assistant For Academic Help.</h1>
            <div className="details">
              <p>- React.js</p>
              <p>- Node.js</p>
              <p>- Axios</p>
              <p>- Express</p>
              <p>- MySQL</p>
            </div>
            <div className="viewWork">
              <button
                onClick={() => {
                  window.open("https://rds.onlysiam.com/");
                }}
              >
                View work
              </button>
              <button id="git">
                <img src={git} alt="" />
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadedSlideRight}
          animate={controls2}
          initial="hidden"
          ref={element2}
          className="weathercloset project"
          id="wc"
        >
          <div className="description">
            <h3>Weather Closet</h3>
            <h1>A Weather Based Fashion Suggestion Web Application.</h1>
            <p>- React.js</p>
            <p>- Axios</p>
            <p>- Express</p>
            <p>- MySQL</p>
            <div className="viewWork">
              <button
                onClick={() => {
                  window.open("https://weathercloset.onlysiam.com/");
                }}
              >
                View work
              </button>
              <button id="git">
                <img src={git} alt="" />
              </button>
            </div>
          </div>
          <div className="img">
            <img src={wc} alt="" />
          </div>
        </motion.div>
        <motion.div
          variants={fadedSlideLeft}
          animate={controls3}
          initial="hidden"
          ref={element3}
          className="surela project"
        >
          <div className="img">
            <img src={surela} alt="" />
          </div>
          <div className="description">
            <h3>Surela</h3>
            <h1>An Online Music Player.</h1>
            <p>- React.js</p>
            <div className="viewWork">
              <button
                onClick={() => {
                  window.open("https://surela.onlysiam.com/");
                }}
              >
                View work
              </button>
              <button id="git">
                <img src={git} alt="" />
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadedSlideRight}
          animate={controls4}
          initial="hidden"
          ref={element4}
          className="greentouch project"
        >
          <div className="description">
            <h3>Greentouch Group</h3>
            <h1>Official Website Of Greentouch Group.</h1>
            <p>- HTML5</p>
            <p>- Css</p>
            <p>- Javascript</p>
            <p>- JQuery</p>
            <p>- MySQL</p>
            <div className="viewWork">
              <button
                onClick={() => {
                  window.open("https://greentouch.onlysiam.com/");
                }}
              >
                View work
              </button>
              <button id="git">
                <img src={git} alt="" />
              </button>
            </div>
          </div>
          <div className="img">
            <img src={gt} alt="" />
          </div>
        </motion.div>
        <motion.div
          variants={fadedSlideLeft}
          animate={controls5}
          initial="hidden"
          ref={element5}
          className="cgpa101 project"
        >
          <div className="img">
            <img src={cgpa} alt="" />
          </div>
          <div className="description">
            <h3>CGPA101</h3>
            <h1>An Academic Course Tracking Mobile Web Application.</h1>
            <p>- React.js</p>
            <div className="viewWork">
              <button
                onClick={() => {
                  window.open("https://cgpa101.onlysiam.com/");
                }}
              >
                View work
              </button>
              <button id="git">
                <img src={git} alt="" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Projectstyle>
  );
};

const Projectstyle = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 15rem;
  padding: 5rem 15vw 0rem 15vw;
  .title {
    h2 {
      font-size: 4rem;
      font-weight: 600;
      color: #70e8fd;
      margin-bottom: 5rem;
    }
  }
  .projects {
    .project {
      display: flex;
      align-items: center;
      margin-bottom: 10rem;
      .img {
        img {
          height: 30rem;
        }
      }
      .description {
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
        h1 {
          padding-left: 10px;
          margin-bottom: 1rem;
          font-size: 1.7rem;
          font-weight: 200;
          color: #70e8fd;
        }
        h3 {
          padding-left: 10px;
          font-size: 2.5rem;
          font-weight: 400;
          color: #03e8b9;
        }
        p {
          padding-left: 20px;
          font-size: 1.6rem;
          font-weight: 200;
          color: #70e8fd;
        }
        .viewWork {
          display: flex;
          align-items: center;
          button {
            margin-top: 3rem;
            margin-right: 1rem;
            font-weight: 400;
            cursor: pointer;
            font-size: 1.3rem;
            background: transparent;
            font-family: "Barlow", sans-serif;
            color: #dadada;
            border-radius: 5px;
            border: 1px solid #dbdbdb;
            padding: 10px 20px;
            transition: all 0.5s ease;
            &:hover {
              border: 1px solid #000000;
              background-color: #03e8b9;
              color: black;
            }
          }
          #git {
            height: 3rem;
            padding: 0px 20px;
            img {
              height: 2rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1600px) {
    padding: 5rem 10vw 0rem 10vw;
  }
  @media (max-width: 1400px) {
    padding: 5rem 8vw 0rem 8vw;
    .projects {
      .project {
        .img {
          img {
            height: 25rem;
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 5rem 6vw 0rem 6vw;
    .projects {
      .project {
        .img {
          img {
            height: 18rem;
          }
        }
      }
    }
  }
  @media (max-width: 1000px) {
    overflow-x: hidden;
    margin-top: 15rem;
    padding: 3rem 3vw 1rem 3vw;
    .title {
      h2 {
        font-size: 3rem;
        margin-bottom: 3rem;
      }
    }
    .projects {
      .project {
        margin-bottom: 5rem;
        flex-direction: column;
        .img {
          img {
            height: 18rem;
          }
        }
        .description {
          width: 70%;
          h1 {
            padding-left: 10px;
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }
          h3 {
            padding-left: 10px;
            font-size: 2rem;
          }
          p {
            padding-left: 20px;
            font-size: 1.3rem;
          }

          .viewWork {
            display: flex;
            align-items: center;
            button {
              margin-bottom: 3rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 700px) {
    overflow-x: hidden;
    margin-top: 15rem;
    padding: 3rem 6vw 1rem 6vw;
    .title {
      h2 {
        font-size: 3rem;
        margin-bottom: 3rem;
      }
    }
    .projects {
      .project {
        margin-bottom: 5rem;
        align-items: center;
        flex-direction: column;
        .img {
          img {
            width: 100%;
            height: 12rem;
          }
        }
        .description {
          width: 100%;
          h1 {
            padding-left: 10px;
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }
          h3 {
            padding-left: 10px;
            font-size: 2rem;
          }
          p {
            padding-left: 20px;
            font-size: 1.3rem;
          }

          .viewWork {
            display: flex;
            align-items: center;
            button {
              margin-bottom: 3rem;
            }
          }
        }
      }
    }
  }
`;
export default Projects;
