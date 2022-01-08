import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

type Button = {
  size?: "big" | "medium" | "small";
  icon?: ReactNode;
  children: ReactNode;
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  size,
  icon,
  color,
  backgroundColor,
  hoverColor,
  hoverBackgroundColor,
  children,
  onClick,
}: Button) => {
  return (
    <Container
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      <>{icon}</>
      <span>{children}</span>
    </Container>
  );
};

const Container = styled(motion.button)<Button>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    color: ${({ hoverColor }) => hoverColor};
  }
`;

export default Button;
