import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import useIsMobile from "hooks/useIsMobile";
import computeSize from "lib/utils/computeSize";
import React, { MouseEvent, ReactNode, useEffect } from "react";
import ButtonVariant from "type/variants/Button";
import Button from "../Button";

type ModalProps = {
  body: ReactNode;
  answerType?: "single" | "multi";
  title?: string;
  width?: string | number;
  height?: string | number;
  closeModal: () => void;
  leftText?: string;
  rightText?: string;
  leftButtonVariant?: ButtonVariant;
  rightButtonVariant?: ButtonVariant;
  onRightButtonClick?: () => void;
  onLeftButtonClick?: () => void;
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
  onRightButtonClick,
  onLeftButtonClick,
  width = 300,
  height = 300,
  leftText = "취소",
  rightText = "확인",
}: ModalProps) => {
  const isMobile = useIsMobile();
  const preventScroll = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    preventScroll();
    window.addEventListener("scroll", preventScroll);

    return () => {
      window.removeEventListener("scroll", preventScroll);
    };
  }, []);

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
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          {answerType === "single" ? (
            <Button {...rightButtonVariant} onClick={onRightButtonClick}>
              {rightText}
            </Button>
          ) : (
            <>
              <Button {...leftButtonVariant} onClick={onRightButtonClick}>
                {leftText}
              </Button>
              <Button {...rightButtonVariant} onClick={onLeftButtonClick}>
                {rightText}
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
  z-index: 20;
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
  overflow-y: scroll;
  padding: 1.5rem;
  z-index: 999;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

const ModalBody = styled.main``;

const ModalFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export default Modal;
