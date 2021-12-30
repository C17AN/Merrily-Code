import styled from "@emotion/styled";
import React from "react";

type Button = {
  size?: "big" | "medium" | "small";
};

const Button = styled.button`
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  &:hover {
  }
`;

export default Button;
