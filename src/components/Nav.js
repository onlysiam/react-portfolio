import React from "react";
import styled from "styled-components";
import { scroller, Link } from "react-scroll";
const Nav = () => {
  return (
    <NavStyled>
      <h1>
        <a id="logo" href="#">
          OnlySiam
        </a>
      </h1>
      <ul>
        <li>
          <Link id="a" to="about" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link id="a" to="skill" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li>
          <Link id="a" to="project" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link id="a" to="profile" smooth={true} duration={500}>
            PROFILES
          </Link>
        </li>
        <li>
          <Link id="a" to="resume" smooth={true} duration={500}>
            RÉSUMÉ
          </Link>
        </li>
      </ul>

      <button>CONTACT</button>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  position: fixed;
  width: 100vw;
  height: 5rem;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 6vw;
  background-color: #11152be1;
  border-bottom: 1px solid #2e355a;
  z-index: 10;
  #logo {
    font-size: 1.7rem;
    font-family: "lobster", cursive;
    color: #dadada;
  }
  #a {
    cursor: pointer;
    color: #dadada;
    text-decoration: none;
    font-size: 1.2rem;
  }
  a {
    cursor: pointer;
    color: #dadada;
    text-decoration: none;
    font-size: 1.2rem;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    li {
      padding-left: 2vw;
      padding-right: 2vw;
      position: relative;
    }
  }
  button {
    font-weight: 400;
    cursor: pointer;
    font-size: 1.3rem;
    background: transparent;
    font-family: "Barlow", sans-serif;
    color: #dadada;
    border-radius: 30px;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    transition: all 0.5s ease;
    &:hover {
      border: 1px solid #000000;
      background-color: #03e8b9;
      color: black;
    }
  }
`;
export default Nav;
