import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

type TagProps = {
  tagName: string;
  color?: string;
};

const Tag = ({ tagName, color = palette.grey[700] }: TagProps) => (
  <Container color={color}>{tagName}</Container>
);

const Container = styled.li<{ color: string }>`
  border-radius: 4px;
  padding: 0.25rem 0.375rem;
  display: inline-block;
  color: ${({ color }) => color};
  background-color: ${palette.notion.portfolio.codeBackground};
  font-size: 0.675rem;
`;

export default Tag;
