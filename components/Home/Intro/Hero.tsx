import styled from "@emotion/styled";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return <Container>즐겁게, 코드</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bolder;
  text-align: center;
  height: 100%;
  grid-column: 1 / 3;
`;

export default Hero;
