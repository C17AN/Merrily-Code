import styled from "@emotion/styled";
import React from "react";
import { palette } from "styles/palette";
import TechStackItem from "./Item";

const TeckStackList = () => {
  return (
    <Container>
      <TechStackItem />
    </Container>
  );
};

const Container = styled.div`
  padding: 3rem;
  border: 1px solid ${palette.grey[50]};
  background-color: ${palette.grey[800]};
  border-radius: 8px;
`;

export default TeckStackList;
