import { useScroll } from "../useScroll";
import styled from "styled-components";
import nsu from "../../img/nsu.png";
import git from "../../img/git.png";
//animations
import { motion } from "framer-motion";
import { fadedSlideLeft } from "../../animation";
const NsuAide = () => {
  const [element, controls] = useScroll();
  return (
    <Project
      variants={fadedSlideLeft}
      animate={controls}
      initial="hidden"
      ref={element}
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
          <button
            onClick={() => {
              window.open("https://github.com/onlysiam/campus-assistant-react");
            }}
            id="git"
          >
            <img src={git} alt="" />
          </button>
        </div>
      </div>
    </Project>
  );
};

const Project = styled(motion.div)`
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
`;

export default NsuAide;
