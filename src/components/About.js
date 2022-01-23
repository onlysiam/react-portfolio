import React from "react";
import profile1 from "../img/profile1.png";

import styled from "styled-components";
const About = () => {
  return (
    <Aboutsection>
      <div className="description">
        <div className="title">
          <div className="collapse">
            <h1>Hello</h1>
          </div>
          <div className="collapse">
            <h2>I'm Siam Ahmed</h2>
          </div>
          <p>About my self bla bal bal</p>
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
  padding: 5rem 20rem 0rem 20rem;
  .description {
  }
  .title {
    h1 {
      font-size: 10rem;
      color: #03e8b9;
    }
    h2 {
      font-size: 4rem;
      font-weight: 600;
      color: #03e8e8;
    }
    p {
      font-size: 2rem;
      font-weight: 600;
      color: #99f5f5;
    }
  }

  .image {
    img {
      height: 50rem;
    }
  }
`;

export default About;
