import styled from "@emotion/styled";
import { motion } from "framer-motion";
import computeSize from "lib/utils/computeSize";
import React, { ReactNode } from "react";

type ModalProps = {
  title: string;
  body: ReactNode;
  answerType: "single" | "multi";
  width?: string | number;
  height?: string | number;
  closeModal: () => void;
};

const variants = {
  open: {
    y: [50, 0],
  },
};

const Modal = ({ title, body, answerType, closeModal, width = 300, height = 300 }: ModalProps) => {
  const handleClose = (e: MouseEvent) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <>
      <BackDrop onClick={handleClose} />
      <Container
        onClick={() => alert("a")}
        width={width}
        height={height}
        animate={"open"}
        initial={{ y: 50 }}
        variants={variants}
        transition={{ duration: 0.3, type: "tween" }}
      >
        <h2>{title}</h2>
        <>{body}</>
      </Container>
    </>
  );
};

const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const Container = styled(motion.div)<{ height: number | string; width: number | string }>`
  position: absolute;
  top: calc(50% - (${({ height }) => computeSize(height)} / 2));
  left: calc(50% - (${({ width }) => computeSize(width)} / 2));
  background-color: white;
  width: ${({ width }) => computeSize(width)};
  height: ${({ height }) => computeSize(height)};
  max-width: 90%;
  border-radius: 0.75rem;
  padding: 1.5rem;
  z-index: 15;
  pointer-events: none;
`;

export default Modal;
