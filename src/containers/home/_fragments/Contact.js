import React from "react";
import styled from "styled-components";
import harim2 from "images/harim2.jpg";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <Container id="contact">
      <ContentsContainer>
        <Picture />
        <TextContainer>
          <LineContainer>
            <Github />
            <Url href="https://github.com/Choharim" target="_blank">
              github.com/Choharim
            </Url>
          </LineContainer>
          <LineContainer>
            <Email />
            <Url href="mailto:jhl8586@naver.com" target="_blank">
              jhl8586@naver.com
            </Url>
          </LineContainer>
        </TextContainer>
      </ContentsContainer>
    </Container>
  );
};

export default Contact;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Picture = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-image: url(${harim2});
  background-size: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-left: 20px;
  height: 320px;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Github = styled(AiFillGithub)`
  font-size: 2.5rem;
`;

const Email = styled(AiOutlineMail)`
  font-size: 2.5rem;
`;

const Url = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
  &:active {
    color: black;
  }
`;
