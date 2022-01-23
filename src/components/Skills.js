import React from "react";
import react from "../img/react.png";
import js from "../img/js.png";
import html from "../img/html.png";
import scss from "../img/scss.png";
import vue from "../img/vue.png";
import node from "../img/node.png";
import laptop from "../img/laptop.jfif";
import styled from "styled-components";

const Skills = () => {
  return (
    <Skillssection id="skill">
      <div className="laptop">
        <img src={laptop} alt="" />
      </div>
      <div className="description">
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="cards">
          <div className="upper row">
            <div className="card">
              <div className="icon">
                <img src={react} alt="" />
                <h3>React</h3>
              </div>
              <p>- JSX</p>
              <p>- Router Dom</p>
              <p>- Redux</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={js} alt="" />
                <h3>JavaScript</h3>
              </div>
              <p>- ES5, ES6</p>
              <p>- Error Handling</p>
              <p>- DOM Manipulation</p>
            </div>
          </div>
          <div className="middle row">
            <div className="card">
              <div className="icon">
                <img src={vue} alt="" />
                <h3>Vue.js</h3>
              </div>
              <p>- Learning</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={node} alt="" />
                <h3>Node.JS</h3>
              </div>
              <p>- Express</p>
              <p>- Axios</p>
            </div>
          </div>
          <div className="lower row">
            <div className="card">
              <div className="icon">
                <img src={html} alt="" />
                <h3>HTML & Css</h3>
              </div>
              <p>- HTML5</p>
              <p>- Responsive Design</p>
              <p>- Built From Scratch</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={scss} alt="" />
                <h3>Sass</h3>
              </div>
              <p>- Mapping</p>
            </div>
          </div>
        </div>
      </div>
    </Skillssection>
  );
};

const Skillssection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 15vw 15rem 15vw;
  .laptop {
    img {
      height: 25rem;
    }
  }
  .description {
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
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      .row {
        display: flex;
      }
      .card {
        display: flex;
        width: 15rem;
        flex-direction: column;
        margin-top: 3rem;
        margin-right: 5rem;
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
          font-size: 1.2rem;
          font-weight: 200;
          color: #cdffff;
        }
        img {
          height: 4rem;
        }
      }
    }
  }
`;
export default Skills;
