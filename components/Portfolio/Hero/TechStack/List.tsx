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
  border-radius: 4px;
`;

export default TeckStackList;
