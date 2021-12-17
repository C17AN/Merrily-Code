import styled from "@emotion/styled";
import Talk from "components/common/Talk";
import React from "react";
import About from "./About";
import Hero from "./Hero";

interface Props {}

const Portfolio = (props: Props) => {
  return (
    <Container>
      <Hero />
      <About />
      <Talk />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export default Portfolio;
