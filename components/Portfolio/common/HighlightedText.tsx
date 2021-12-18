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
  width: max-content;
  padding: 0.125rem 0.4rem;
  margin-bottom: 0.375rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || palette.notion.portfolio.codeBackground};
  color: ${({ color }) => color};
`;

export default HighlightedText;
