import styled from "styled-components";
import figma from "../../img/figma.svg";
import photoshop from "../../img/photoshop.svg";
import illustrator from "../../img/illustrator.svg";
const SecondarySkills = () => {
  return (
    <SecondarySkill className="secondarySkills">
      <div className="graphicalDesign card">
        <h1>Graphical Design</h1>
        <p>
          Besides coding, I have a good understanding of UI/UX designs. I can
          create and design web application's UI using Figma. Also, I have
          proficiency in Adobe Illustrator & Adobe Photoshop.
        </p>
        <div className="logos">
          <img src={figma} alt="figma" />
          <img src={illustrator} alt="illustrator" />
          <img src={photoshop} alt="photoshop" />
        </div>
      </div>
      <div className="qualities card">
        <h1>Personal Traits</h1>
        <p>Analytical, innovative, self-motivating.</p>
        <p>"Can do" attitude and also a quick learner.</p>
        <p>Highly enthusiastic with good communication skills.</p>
        <p>Passionate about front-end designing and programming.</p>
      </div>
    </SecondarySkill>
  );
};

const SecondarySkill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  margin-top: 5rem;
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 30vw;
    height: 30vh;
    border-radius: 5px;
    padding: 1rem;
    background: linear-gradient(340deg, #171c3a, rgba(66, 66, 66, 0));

    h1 {
      font-size: 1.7rem;
      font-weight: 400;
      color: #72d9ff;
    }
    p {
      margin-top: 5px;
      font-size: 1.2rem;
      font-weight: 200;
      color: #cdffff;
    }
  }
  .graphicalDesign {
    .logos {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 40%;
      img {
        height: 3rem;
      }
    }
  }
  .qualities {
    p {
      margin-top: 0rem;
    }
  }
  @media screen and (max-width: 1650px) {
    width: 80vw;
    .card {
      width: 35vw;
      height: 35vh;
    }
    .graphicalDesign {
      .logos {
        width: 50%;
      }
    }
  }
  @media screen and (max-width: 1450px) {
    width: 84vw;
  }
  @media screen and (max-width: 1300px) {
    .card {
      width: 40vw;
      height: 35vh;
    }
    .graphicalDesign {
      .logos {
        width: 50%;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    width: 88vw;
    .card {
      p {
        font-size: 1rem;
      }
    }
    .graphicalDesign {
      .logos {
        width: 70%;
        img {
          height: 2.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .graphicalDesign {
      .logos {
        width: 90%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    width: 92vw;
    justify-content: space-between;
    margin-top: 5rem;
    .card {
      width: 44vw;
      height: 35vh;
      padding: 1rem;

      h1 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
    .graphicalDesign {
      .logos {
        width: 80%;
        img {
          height: 2rem;
        }
      }
    }
    .qualities {
      p {
        margin-top: 0rem;
        padding: 0rem;
      }
    }
  }
`;
export default SecondarySkills;
