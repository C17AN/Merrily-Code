import styled from "@emotion/styled";
import React from "react";

const Li = styled.li`
  line-height: 1.8;
  list-style: disc;
  margin: 0.5rem 0 0.5rem 1.5rem;
  padding-left: 0.5rem;

  & li {
    list-style: circle;
    padding-left: 0.25rem;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;

    & li {
      font-size: 0.75rem;
    }
  }
`;

export default Li;
