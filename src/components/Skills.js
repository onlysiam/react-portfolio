import React from "react";
import react from "../img/react.png";
import js from "../img/js.png";
import html from "../img/html.png";
import scss from "../img/scss.png";
import laptop from "../img/laptop.jfif";

const Skills = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={react} alt="" />
              <h3>React</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={js} alt="" />
              <h3>JavaaScript</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={html} alt="" />
              <h3>HTML & Css</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={scss} alt="" />
              <h3>Sass</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="laptop">
        <img src={laptop} alt="" />
      </div>
    </div>
  );
};

export default Skills;
