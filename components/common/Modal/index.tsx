import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type ModalProps = {
  title: string;
  body: ReactNode;
  answerType: "single" | "multi";
};

const Modal = ({ title, body, answerType }: ModalProps) => {
  return (
    <BackDrop>
      <Container>{title}</Container>
    </BackDrop>
  );
};

const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  background-color: white;
  width: 30vw;
  height: 30vh;
`;

export default Modal;
