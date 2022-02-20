import React from "react";

//components
import ProgressBar from "./ProgressBar";

import styled from "styled-components";
//animations
import { motion } from "framer-motion";
import { skillTitleAnimation, slideAnimation } from "../animation";
const SkillCard = ({ data, image }) => {
  console.log(data.image);
  return (
    <Card variants={slideAnimation} className="card">
      <div className="icon">
        <img src={image} alt={data.image} />
        <motion.h3 variants={slideAnimation}>{data.name}</motion.h3>
      </div>
      {data.ptags.map((ptag, id) => (
        <motion.p key={id} variants={skillTitleAnimation}>
          - {ptag.body}
        </motion.p>
      ))}
      {/* <motion.p variants={skillTitleAnimation}>- Hooks</motion.p>
      <motion.p variants={skillTitleAnimation}>- Router</motion.p> */}
      <motion.div variants={slideAnimation} className="progressBar">
        <ProgressBar skillName={data.progress} />
      </motion.div>
    </Card>
  );
};

const Card = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 17rem;
  height: 14rem;
  padding: 1rem;
  flex-direction: column;
  border-radius: 5px;
  background: linear-gradient(340deg, #171c3a, rgba(66, 66, 66, 0));
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
    margin-top: 5px;
    font-size: 1.2rem;
    font-weight: 200;
    color: #cdffff;
  }
  img {
    height: 4rem;
  }
  .progressBar {
    margin-top: 10px;
  }
  @media (max-width: 1600px) {
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
  @media (max-width: 1400px) {
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

  @media (max-width: 1200px) {
    width: 16rem;
    height: 13rem;

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

  @media (max-width: 850px) {
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

  @media (max-width: 500px) {
    display: flex;
    align-items: flex-start;
    width: 11rem;
    height: 12rem;
    margin: 0;
    padding: 0.6rem;
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
`;

export default SkillCard;
