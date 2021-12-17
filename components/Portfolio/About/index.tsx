import styled from "@emotion/styled";
import React from "react";
import Divider from "../common/Divider";
import SubTitle from "../common/SubTitle";
import Career from "./Career";
import Challenge from "./Challenge";
import Education from "./Education";

interface Props {}

const About = (props: Props) => {
  return (
    <Container>
      <SubTitle>👉🏻 내 정보</SubTitle>
      <Divider />
      <Education />
      <Career />
      <Challenge />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 5rem 5rem 5rem;

  @media (max-width: 768px) {
    & {
      padding: 1rem 1.5rem 1rem 1.5rem;
    }
  }
`;

export default About;
