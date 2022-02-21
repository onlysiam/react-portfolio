import React from "react";
//data
import skillData from "./skills/SkillCardData";
//images
import react from "../img/react.svg";
import js from "../img/js.svg";
import html from "../img/html.svg";
import scss from "../img/sass.svg";
import mysql from "../img/mysql.svg";
import gitbash from "../img/gitbash.svg";
// import vue from "../img/vue.svg";
import php from "../img/php.svg";
import node from "../img/node.svg";
import redux from "../img/redux.svg";
import styled from "styled-components";

import { motion } from "framer-motion";
import { fadeAnimation } from "../animation";
//components
import { useScroll } from "./useScroll";
import SkillCard from "./skills/SkillCard";
import SecondarySkills from "./skills/SecondarySkills";

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
      <div className="description">
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="cards">
          <SkillCard data={skillData.react} image={react} />
          <SkillCard data={skillData.js} image={js} />
          <SkillCard data={skillData.html} image={html} />
          <SkillCard data={skillData.redux} image={redux} />
          <SkillCard data={skillData.node} image={node} />
          <SkillCard data={skillData.sass} image={scss} />
          <SkillCard data={skillData.git} image={gitbash} />
          <SkillCard data={skillData.mysql} image={mysql} />
          <SkillCard data={skillData.php} image={php} />
        </div>
        <SecondarySkills />
      </div>
    </Skillssection>
  );
};

const Skillssection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100vw;
  padding: 0rem 15vw 0rem 15vw;

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
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      gap: 5rem 2rem;
      width: 70vw;
      margin-top: 3rem;
      .row {
        display: flex;
      }
    }
  }

  @media (max-width: 1650px) {
    padding: 0rem 10vw 0rem 10vw;
    .description {
      width: 80vw;
      .title {
        h2 {
          font-size: 4rem;
        }
      }
      .cards {
        gap: 5rem 2rem;
        width: 80vw;
      }
    }
  }
  @media (max-width: 1450px) {
    padding: 0rem 8vw 0rem 8vw;
    .description {
      width: 84vw;
      .cards {
        width: 84vw;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 0rem 6vw 0rem 6vw;
    .description {
      width: 88vw;
      .cards {
        width: 88vw;
      }
      .title {
        h2 {
          font-size: 3.1rem;
        }
      }
    }
  }

  @media (max-width: 850px) {
    .description {
      .title {
        h2 {
          font-size: 2.9rem;
          margin-bottom: 1rem;
        }
      }
    }
  }

  @media (max-width: 500px) {
    padding: 0rem 0vw 0rem 0vw;
    width: 100vw;
    .description {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0rem 0vw 0rem 0vw;
      .title {
        h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
      }
      .cards {
        justify-content: center;
        align-items: center;
        width: 100vw;
        margin-top: 1rem;
      }
    }
  }
`;
export default Skills;
