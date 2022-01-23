import React from "react";
import profile1 from "../img/profile1.jpg";

const About = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="collapse">
            <h2>Some text</h2>
          </div>
          <div className="collapse">
            <h2>Some text</h2>
          </div>
        </div>
        <p>About my self bla bal bal</p>
        <button>Contact</button>
      </div>
      <div className="image">
        <img src={profile1} alt="" />
      </div>
    </div>
  );
};

export default About;
