import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

type Button = {
  size?: "big" | "medium" | "small";
  icon?: ReactNode;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ size, icon, children, onClick }: Button) => {
  return (
    <Container onClick={onClick}>
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
  &:hover {
  }
`;

export default Button;
