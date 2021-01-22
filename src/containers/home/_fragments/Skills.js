import React from "react";
import styled from "styled-components";
import harim from "images/harim.jpg";
import html from "images/html.png";
import css from "images/css.webp";
import javascript from "images/javascript.webp";
import styledcomponents from "images/styledcomponents.png";
import react from "images/react.png";

const Skills = () => {
  return (
    <Container id="skills">
      <Picture />
      <SkillsContainer>
        <Title>Skills</Title>
        <ImgContainer>
          <Img src={html} />
          <Img src={css} />
          <Img src={javascript} />
          <Img src={styledcomponents} />
          <Img src={react} />
        </ImgContainer>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
`;

const Picture = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${harim});
  background-size: contain;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 10px;
`;

const Title = styled.span`
  font-size: 20px;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0 30px;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;
