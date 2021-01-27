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
          <h1>
            365일 깃허브 잔디를 가꾸는 열정을 지닌 <span>조하림</span>입니다.
          </h1>
          <p>Stack</p>
          <SkillsContainer>
            <Skill src={react} />
            <Skill src={javascript} />
            <Skill src={html} />
            <Skill src={css} />
            <Skill src={github} />
          </SkillsContainer>
        </TextContainer>
      </ContentsContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0 0;
  width: 100%;
  max-width: 978px;
  height: 100%;
  max-height: 500px;
`;

const Picture = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${harim});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.375rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% - 516px);
  height: 100%;
  padding: 0 0 0 16px;

  > h1 {
    font-size: 18px;
    > span {
      font-weight: bold;
      color: #3c7a9d;
    }
  }

  > p {
    margin: 20px 0 0;
    font-size: 16px;
    font-weight: bold;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  margin: 10px 0 0;
  width: 100%;
`;

const Skill = styled.img`
  width: calc(100% / 5 - 30px);
  :not(:last-child) {
    margin: 0 10px 0 0;
  }
`;
