import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

type CardBorderDecorationProps = {
  primaryColor?: string;
  secondaryColor?: string;
};

const CardBorderDecoration = ({ primaryColor, secondaryColor }: CardBorderDecorationProps) => {
  return (
    <Container>
      <PrimaryColor primaryColor={primaryColor} />
      <SecondaryColor secondaryColor={secondaryColor} />
    </Container>
  );
};

const Container = styled.div`
  width: 2rem;
  border-right: 1px solid ${palette.grey[100] + "70"};

  @media (max-width: 768px) {
    width: 1.5rem;
  }
`;

const PrimaryColor = styled.div<{ primaryColor?: string }>`
  height: 50%;
  background-color: ${({ primaryColor }) => primaryColor || palette.notion.hover};
`;

const SecondaryColor = styled.div<{ secondaryColor?: string }>`
  height: 50%;
  background-color: ${({ secondaryColor }) => secondaryColor || palette.white};
`;

export default CardBorderDecoration;
