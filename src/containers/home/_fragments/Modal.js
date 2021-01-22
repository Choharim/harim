import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ setShow }) => {
  const [step, setStep] = useState(1);

  return (
    <ModalBg id="bg" onClick={(e) => e.target.id === "bg" && setShow(false)}>
      <ModalContainer>
        <CloseBtn onClick={() => setShow(false)} />
        <ContentsContainer></ContentsContainer>
      </ModalContainer>
    </ModalBg>
  );
};

export default Modal;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background-color: white;
`;

const CloseBtn = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  cursor: pointer;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
