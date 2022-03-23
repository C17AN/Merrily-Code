import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { palette } from "styles/palette";

interface HighlightedTextProps {
  color: string;
  backgroundColor?: string;
  children: ReactNode;
}

const HighlightedText = ({ color, backgroundColor, children }: HighlightedTextProps) => {
  return (
    <Container color={color} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

const Container = styled.p<HighlightedTextProps>`
  max-width: 100%;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
  line-height: 1.5;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || palette.notion.portfolio.codeBackground};
  color: ${({ color }) => color};

  @media (max-width: 768px) {
    font-size: 0.675rem;
    white-space: nowrap;
    overflow-y: scroll;
  }
`;

export default HighlightedText;
