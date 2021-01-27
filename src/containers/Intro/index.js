import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import intro1 from "images/intro1.jpg";
import intro2 from "images/intro2.jpg";
import { icons } from "react-icons/lib";

const Intro = () => {
  const [image, setImage] = useState(`${intro1}`);

  const enterPage = () => {
    setImage(`${intro2}`);
  };

  const leavePage = () => {
    setImage(`${intro1}`);
  };

  return (
    <Bg image={image}>
      <IntroContainer>
        <TextContainer>
          <IntroText>Front End-Developer</IntroText>
          <IntroText>조 하림</IntroText>
        </TextContainer>
        <EnterBtn to="/home" onMouseEnter={enterPage} onMouseLeave={leavePage}>
          Welcome
        </EnterBtn>
      </IntroContainer>
    </Bg>
  );
};

export default Intro;

const Bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-size: contain;
  transition: 0.5s linear;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 280px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroText = styled.h1`
  color: white;
`;

const EnterBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border-radius: 30px;
  border: 2.5px solid #3c7a9d;
  text-decoration: none;
  font-size: 20px;
  background-color: transparent;
  color: #f6a9ad;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #f6a9ad;
    color: #3c7a9d;
    opacity: 0.8;
  }
`;
