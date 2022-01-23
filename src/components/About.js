import React from "react";
import profile1 from "../img/profile1.png";
import { scroller } from "react-scroll";

import styled from "styled-components";
const About = () => {
  scroller.scrollTo("dept", {
    duration: 800,
    delay: 0,
    offset: 350,
    smooth: "easeInOutQuart",
  });
  return (
    <Aboutsection id="about">
      <div className="description">
        <div className="title">
          <div className="collapse">
            <h1>Hello</h1>
          </div>
          <div className="collapse">
            <h2>I'm Siam Ahmed</h2>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Web Developer</h3>
            <p>Passionate about front-end designing & programming.</p>
          </div>
          <div className="card">
            <h3>Proficiency</h3>
            <p>I have a decent knowledge about HTML5,Sass, ReactJS. </p>
          </div>
          <div className="card">
            <h3>NSUer</h3>
            <p>Graduated from North South University.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={profile1} alt="" />
      </div>
    </Aboutsection>
  );
};

const Aboutsection = styled.div`
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 5rem 15vw 13rem 15vw;
  .description {
    .title {
      h1 {
        font-size: 10rem;
        font-weight: 800;
        color: #03e8b9;
      }
      h2 {
        margin: 2rem 0rem;
        font-size: 4rem;
        font-weight: 600;
        color: #70e8fd;
      }
    }
    .cards {
      display: flex;
      .card {
        padding: 10px;
        background-color: #282f51;
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
        color: #cdffff;
      }
    }
  }
  .image {
    img {
      height: 50rem;
    }
  }
`;

export default About;
