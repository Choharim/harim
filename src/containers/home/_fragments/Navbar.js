import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Url to="/">Cho Harim</Url>
      <LinkContainer>
        <Atag href="#skills">Home</Atag>
        <Atag href="#portfolio">Portfolio</Atag>
        <Atag href="#contact">Contact</Atag>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  padding: 20px;
  background-color: #3c7a9d;
  opacity: 0.9;
  color: white;
  z-index: 10;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

const Url = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: white;
  &:visited {
    color: white;
  }
  &:active {
    color: white;
  }
`;

const Atag = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: white;
  &:visited {
    color: white;
  }
  &:active {
    color: white;
  }
`;
