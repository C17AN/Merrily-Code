import styled from "@emotion/styled";
import React from "react";
import TechStackItem from "./Item";
import Slider from "react-slick";
import { palette } from "styles/palette";

const TeckStackList = () => {
  return (
    <Container>
      <Slider>
        <TechStackItem />
        <TechStackItem />
        <TechStackItem />
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  padding: 3rem;
  border: 5px solid ${palette.grey[50]};
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

export default TeckStackList;
