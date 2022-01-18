import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";

const A = styled.a`
  line-height: 1.8;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  position: relative;
  border-bottom: 12px solid transparent;

  color: ${palette.skyBlue[500]};

  &:hover {
    color: ${palette.skyBlue[100]};
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export default A;
