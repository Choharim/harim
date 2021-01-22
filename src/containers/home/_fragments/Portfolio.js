import React from "react";
import styled from "styled-components";
import home1 from "images/home1.png";
import home2 from "images/home2.png";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <ContentsContainer>
        <Img src={home1} />
        <Img src={home2} />
        <TextContainer>
          <Title>
            강아지 음식을 주문하거나 요리 수업을 신청하는 홈페이지입니다.
          </Title>
          <Text>
            React Hooks, Context API, Styled-Components를 이용하여 만들었습니다.
          </Text>
          <Text>
            "회원가입, 로그인, 주문, 수업신청, 주문한 내역, 신청한 수업 내역"
            등의 기능이 들어가있습니다. <br /> 그 외에도 세세한 기능들이
            담겨있으니 아래 버튼으로 확인해주세요.
          </Text>
          <MoreBtn>더보기</MoreBtn>
        </TextContainer>
      </ContentsContainer>
    </Container>
  );
};

export default Portfolio;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const Img = styled.img`
  height: 600px;
  margin: 0 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 23px;
  margin: 0 0 40px;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 20px;
`;

const MoreBtn = styled.button`
  margin: 10px auto;
  padding: 10px 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #3c7a9d;
  color: white;
  cursor: pointer;
`;
