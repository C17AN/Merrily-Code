import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { palette, shadow } from "styles/palette";

type CardProps = {
  children: ReactNode;
  center?: boolean;
};

const Card = ({ children, center }: CardProps) => {
  return <Container isCenter={center}>{children}</Container>;
};

const Container = styled.div<{ isCenter?: boolean }>`
  flex: 1;
  border-radius: 1rem;
  background-color: ${palette.white};
  padding: 2rem;
  box-shadow: ${shadow.card};
  ${({ isCenter }) =>
    isCenter &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

export default Card;
