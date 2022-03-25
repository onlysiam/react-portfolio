import { useState } from "react";
import styled from "styled-components";
import { fetchProgress, skillPercentage } from "../../data";
const ProgressBarCircle = ({ skillName }) => {
  const [skill, setSkill] = useState(skillPercentage);
  const [width, setWidth] = useState(fetchProgress(skill, skillName));
  return (
    <ProgressBarStyle width={width} className="progressBar">
      {/* <div className="container">
        <div className="progress progress-moved">
          <div className="progress-bar"></div>
        </div>
        <div className="indication">
          <span>Elementary</span>
          <span>Fluent</span>
          <span>Expert</span>
        </div>
      </div> */}
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="40" cy="40" r="40"></circle>
                <circle cx="40" cy="40" r="40"></circle>
              </svg>
              <div className="num">
                <h2>
                  90<span>%</span>
                </h2>
              </div>
            </div>
            <h2 className="text">Html</h2>
          </div>
        </div>
      </div>
    </ProgressBarStyle>
  );
};

const ProgressBarStyle = styled.div`
  .container .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    text-align: center;
    overflow: hidden;
    transition: 0.5s;
  }

  .percent {
    position: relative;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-shadow: inset 0 0 50px #000;
    background: #222;
    z-index: 1000;
  }
  .percent .num {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .percent .num h2 {
    color: #777;
    font-weight: 700;
    font-size: 20px;
    transition: 0.5s;
  }
  .card:hover .percent .num h2 {
    color: #fff;
  }
  .percent .num h2 span {
    color: #777;
    font-size: 24px;
    transition: 0.5s;
  }
  .card:hover .percent .num h2 span {
    color: #fff;
  }
  .text {
    position: relative;
    color: #777;
    margin-top: 10px;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.5s;
  }
  .card:hover .text {
    color: #fff;
  }
  svg {
    position: relative;
    width: 100px;
    height: 100px;
    z-index: 1000;
  }
  svg circle {
    width: 50%;
    height: 50%;
    fill: none;
    stroke: #191919;
    stroke-width: 5;
    stroke-linecap: round;
    transform: translate(5px, 5px);
  }
  svg circle:nth-child(2) {
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
  }
  .card:nth-child(1) svg circle:nth-child(2) {
    stroke-dashoffset: calc(250 - (250 * 90) / 100);
    stroke: #5cbdce;
  }
`;
export default ProgressBarCircle;
