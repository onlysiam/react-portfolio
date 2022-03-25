import React from "react";

import styled from "styled-components";
//data
import { projectsData } from "../data";

import nsuaide from "../img/nsu.png";

import wc from "../img/wc.png";
import surela from "../img/surela.png";
import gt from "../img/gt.png";
import cgpa from "../img/cgpa.png";
import git from "../img/git.png";

import { motion } from "framer-motion";
import { fadeAnimation, fadedSlideLeft, fadedSlideRight } from "../animation";

import { useScroll } from "./useScroll";
import Project from "./projects/Project";

const Projects = () => {
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
        <Project
          animation={fadedSlideLeft}
          image={nsuaide}
          data={projectsData.nsuaide}
        />
        <Project
          animation={fadedSlideRight}
          image={wc}
          data={projectsData.weathercloset}
        />
        <Project
          animation={fadedSlideLeft}
          image={cgpa}
          data={projectsData.cgpa101}
        />
        <Project
          animation={fadedSlideRight}
          image={surela}
          data={projectsData.surela}
        />
        <Project
          animation={fadedSlideLeft}
          image={gt}
          data={projectsData.greentouch}
        />
      </div>
    </Projectstyle>
  );
};

const Projectstyle = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
  padding: 5rem 10vw 0rem 10vw;
  .title {
    h2 {
      font-size: 4rem;
      font-weight: 600;
      color: #70e8fd;
      margin-bottom: 5rem;
    }
  }
  .projects {
    display: flex;
    flex-direction: column;
    gap: 10rem;
    .project {
      .img {
        img {
          height: 35rem;
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
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`;
export default Projects;
