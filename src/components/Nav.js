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
          <a id="a" href="">
            PROJECTS
          </a>
        </li>
        <li>
          <a id="a" href="">
            PROFILES
          </a>
        </li>
        <li>
          <a id="a" href="">
            RÉSUMÉ
          </a>
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
`;
export default Nav;
