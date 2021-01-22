import React from "react";
import styled from "styled-components";
import Navbar from "./_fragments/Navbar";
import Skills from "./_fragments/Skills";
import Portfolio from "./_fragments/Portfolio";
import Contact from "./_fragments/Contact";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;
