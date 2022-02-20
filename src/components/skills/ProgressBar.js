import { useState } from "react";
import styled from "styled-components";
import { fetchProgress, skillPercentage } from "../../data";
const ProgressBar = ({ skillName }) => {
  const [skill, setSkill] = useState(skillPercentage);
  const [width, setWidth] = useState(fetchProgress(skill, skillName));
  return (
    <ProgressBarStyle width={width} className="progressBar">
      <div className="container">
        <div className="progress progress-moved">
          <div className="progress-bar"></div>
        </div>
        <div className="indication">
          <span>Elementary</span>
          <span>Fluent</span>
          <span>Expert</span>
        </div>
      </div>
    </ProgressBarStyle>
  );
};

const ProgressBarStyle = styled.div`
  body {
    background: #2c303a;
  }

  .container {
    width: 15rem;
    text-align: center;
    .indication {
      width: 16rem;
      display: flex;
      margin-left: -0.5rem;
      justify-content: space-between;
      align-items: flex-start;
      span {
        font-size: 0.8rem;
        color: #5cbdce;
      }
    }
  }

  .progress {
    padding: 3px;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.25);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
      0 1px rgba(255, 255, 255, 0.08);
  }

  .progress-bar {
    height: 8px;
    border-radius: 30px;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.05)
    );
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  .progress-moved .progress-bar {
    width: ${(props) => props.width};
    background-color: #5cbdce;
    transition: 2s ease;
  }

  /* @keyframes progressAnimation {
    0% {
      width: 5%;
      background-color: #11152b;
    }
    100% {
      width: ${(props) => props.width};
      background-color: #5cbdce;
    }
  } */

  @media (max-width: 1200px) {
    .container {
      width: 14rem;
      .indication {
        width: 15rem;
      }
    }
  }
  @media (max-width: 500px) {
    .container {
      width: 10rem;
      text-align: center;
      .indication {
        width: 10rem;
        display: flex;
        margin-left: 0rem;
        justify-content: space-between;
        align-items: flex-start;
        span {
          font-size: 0.6rem;
          color: #5cbdce;
        }
      }
    }
  }
`;
export default ProgressBar;
