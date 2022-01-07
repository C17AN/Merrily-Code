import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { palette, shadow } from "styles/palette";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  flex: 1;
  border-radius: 1rem;
  background-color: ${palette.white};
  padding: 2rem;
  box-shadow: ${shadow.card};
`;

export default Card;
