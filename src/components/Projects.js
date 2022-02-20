import React from "react";

import styled from "styled-components";

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
import NsuAide from "./projects/NsuAide";
import Weathercloset from "./projects/Weathecloset";
import Surela from "./projects/Surela";
import Greentouch from "./projects/Greentouch";
import Cgpa101 from "./projects/Cgpa101";
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
        <NsuAide />
        <Cgpa101 />
        <Surela />
        <Weathercloset />
        <Greentouch />
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
