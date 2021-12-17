import styled from "@emotion/styled";
import React from "react";
import TechStackItem from "./Item";

interface Props {}

const TeckStackList = (props: Props) => {
  return (
    <Container>
      <TechStackItem />
    </Container>
  );
};

const Container = styled.div``;

export default TeckStackList;
