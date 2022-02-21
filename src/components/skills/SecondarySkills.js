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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          veniam inventore voluptatibus, minima officiis accusantium totam iste.
          Quaerat praesentium voluptatem soluta eaque iste eos. Fugiat debitis
          at similique dolorem laborum?
        </p>
        <div className="logos">
          <img src={figma} alt="figma" />
          <img src={illustrator} alt="illustrator" />
          <img src={photoshop} alt="photoshop" />
        </div>
      </div>
      <div className="qualities card">
        <h1>Personal Traits</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          veniam inventore voluptatibus, minima officiis accusantium totam iste.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          veniam inventore voluptatibus, minima officiis accusantium totam iste.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          veniam inventore voluptatibus, minima officiis accusantium totam iste.
        </p>
        <div className="logos">
          <img src="" alt="figma" />
          <img src="" alt="illustrator" />
          <img src="" alt="photoshop" />
        </div>
      </div>
    </SecondarySkill>
  );
};

const SecondarySkill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  gap: 2rem 5rem;
  margin-top: 5rem;
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 40vw;
    height: 35vh;
    border-radius: 5px;
    padding: 1rem;
    background: linear-gradient(340deg, #141936, #272f5f);

    h1 {
      padding-left: 10px;
      font-size: 1.7rem;
      font-weight: 400;
      color: #72d9ff;
    }
    p {
      padding-left: 20px;
      margin-top: 5px;
      font-size: 1.2rem;
      font-weight: 200;
      color: #cdffff;
    }
  }
  .graphicalDesign {
    .logos {
      img {
        height: 3rem;
      }
    }
  }
`;
export default SecondarySkills;
