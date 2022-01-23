import React from "react";
import styled from "styled-components";
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
          <a href="">ABOUT</a>
        </li>
        <li>
          <a href="">SKILLS</a>
        </li>
        <li>
          <a href="">PROJECTS</a>
        </li>
        <li>
          <a href="">PROFILES</a>
        </li>
      </ul>
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
  padding: 2rem 10rem;
  background-color: #11152be1;
  border-bottom: 1px solid #2e355a;
  #logo {
    font-size: 1.7rem;
    font-family: "lobster", cursive;
    color: #dadada;
  }
  a {
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
      padding-left: 10rem;
      position: relative;
    }
  }
`;
export default Nav;
