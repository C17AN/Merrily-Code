import styled from "@emotion/styled";
import React from "react";

const Li = styled.li`
  line-height: 1.8;
  list-style: square;
  margin: 0.5rem 0 0.5rem 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export default Li;
