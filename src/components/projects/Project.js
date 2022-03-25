import { useScrollprojects } from "../useScroll";
import styled from "styled-components";
import git from "../../img/git.png";
//animations
import { motion } from "framer-motion";
const Project = ({ image, data, animation }) => {
  const [element, controls] = useScrollprojects();
  return (
    <ProjectStyle
      variants={animation}
      animate={controls}
      initial="hidden"
      ref={element}
      className="nsuaide project"
    >
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="description">
        <h3>{data.name}</h3>
        <h1>{data.description}</h1>
        <div className="details">
          <h2>Technologies:</h2>
          <div className="technologies">
            {data.technologies.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          {data.api ? <h2>APIs:</h2> : ""}
          <div className="technologies">
            {data.api &&
              data.api.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
          </div>
        </div>
        <div className="viewWork">
          <button
            onClick={() => {
              window.open(data.liveweb);
            }}
          >
            View work
          </button>
          <button
            onClick={() => {
              window.open(data.git);
            }}
            id="git"
          >
            <img src={git} alt="" />
          </button>
        </div>
      </div>
    </ProjectStyle>
  );
};

const ProjectStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 3rem;
  .img {
    img {
      height: 50rem;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 1.2rem;
      font-weight: 200;
      color: #70e8fd;
    }
    h2 {
      margin: 1rem 0rem;
      font-size: 1.2rem;
      font-weight: 400;
      color: #70e8fd;
    }
    h3 {
      font-size: 2rem;
      font-weight: 400;
      color: #03e8b9;
    }
    .details {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      .technologies {
        width: 100%;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        p {
          padding: 5px 10px;
          background-color: #70e8fd;
          font-size: 1rem;
          border-radius: 5px;
          font-weight: 600;
          color: black;
        }
      }
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

export default Project;
