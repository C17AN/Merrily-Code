import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import useIsMobile from "hooks/useIsMobile";
import computeSize from "lib/utils/computeSize";
import React, { MouseEvent, ReactNode } from "react";
import ButtonVariant from "type/variants/Button";
import Button from "../Button";

type ModalProps = {
  title: string;
  body: ReactNode;
  answerType: "single" | "multi";
  width?: string | number;
  height?: string | number;
  closeModal: () => void;
  cancelText?: string;
  confirmText?: string;
  leftButtonVariant?: ButtonVariant;
  rightButtonVariant?: ButtonVariant;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const variants = {
  open: {
    y: [50, 0],
  },
};

const Modal = ({
  title,
  body,
  answerType,
  closeModal,
  leftButtonVariant,
  rightButtonVariant,
  onCancel,
  onConfirm,
  width = 300,
  height = 300,
  cancelText = "취소",
  confirmText = "확인",
}: ModalProps) => {
  const isMobile = useIsMobile();
  const handleClose = (e: MouseEvent<HTMLElement>) => {
    closeModal();
  };

  const modal = (
    <>
      <BackDrop onClick={handleClose} />
      <Container
        width={width}
        height={height}
        animate={"open"}
        initial={{ y: 50 }}
        variants={variants}
        transition={{ duration: 0.3, type: "tween" }}
        isMobile={isMobile}
      >
        <h2>{title}</h2>
        <>{body}</>
        <ModalFooter>
          {answerType === "single" ? (
            <Button {...rightButtonVariant} onClick={onCancel}>
              {confirmText}
            </Button>
          ) : (
            <>
              <Button {...leftButtonVariant} onClick={onCancel}>
                {cancelText}
              </Button>
              <Button {...rightButtonVariant} onClick={onConfirm}>
                {confirmText}
              </Button>
            </>
          )}
        </ModalFooter>
      </Container>
    </>
  );

  const portalTarget = document.querySelector(".modal-area");
  return ReactDOM.createPortal(modal, portalTarget);
};

const BackDrop = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 15;
`;

const Container = styled(motion.div)<{
  height: number | string;
  width: number | string;
  isMobile: boolean | null;
}>`
  position: absolute;
  top: calc(50% - (${({ height }) => computeSize(height)} / 2));
  left: calc(50% - (${({ isMobile, width }) => (isMobile ? "300px" : computeSize(width))} / 2));
  background-color: white;
  width: ${({ isMobile, width }) => (isMobile ? "300px" : computeSize(width))};
  height: ${({ height }) => computeSize(height)};
  border-radius: 0.75rem;
  padding: 1.5rem;
  z-index: 20;
`;

const ModalFooter = styled.footer`
  position: absolute;
  display: flex;
  gap: 1rem;
  bottom: 1.25rem;
  right: 1.25rem;
  margin-top: auto;
`;

export default Modal;
