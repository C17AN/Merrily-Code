import styled from "@emotion/styled";
import Talk from "components/common/Talk";
import React from "react";
import About from "./About";
import Hero from "./Hero";
import { palette } from "styles/palette";

const Portfolio = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Talk />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${palette.background.primary};
  display: flex;
  flex-direction: column;
`;

export default Portfolio;
