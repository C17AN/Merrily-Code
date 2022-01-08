import styled from "@emotion/styled";
import computeSize from "lib/utils/computeSize";
import React from "react";
import { palette } from "styles/palette";

const Input = styled.input<{ width?: string | number; height?: string | number }>`
  padding: 0.5rem;
  caret-color: ${palette.grey[400]};
  outline: none;
  transition: 0.2s ease-in-out all;
  border: 1px solid ${palette.grey[200]};
  border-radius: 4px;
  width: ${({ width = "100%" }) => computeSize(width)};
  height: ${({ height = "2rem" }) => computeSize(height)};

  &:focus {
    border-color: ${palette.blue[500]};
  }
`;

export default Input;
