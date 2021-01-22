import React from "react";
import styled from "styled-components";
import harim from "images/harim.jpg";
import html from "images/html.png";
import css from "images/css.webp";
import javascript from "images/javascript.webp";
import react from "images/react.png";
import github from "images/github.png";

const Skills = () => {
  return (
    <Container id="skills">
      <ContentsContainer>
        <Picture />
        <TextContainer>
          <SkillsContainer>
            <Skill src={react} />
            <Skill src={javascript} />
            <Skill src={html} />
            <Skill src={css} />
            <Skill src={github} />
          </SkillsContainer>
          <Text>빠르게 성장하고 있는, 미래가 기대되는 조 하림입니다.</Text>
        </TextContainer>
      </ContentsContainer>
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

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Picture = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${harim});
  background-size: contain;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Skill = styled.img`
  width: 80px;
  height: 80px;
`;

const Text = styled.span`
  margin-top: 10px;
  font-size: 16px;
`;
