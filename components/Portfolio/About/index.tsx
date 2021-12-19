import styled from "@emotion/styled";
import React from "react";
import Divider from "../common/Divider";
import SubTitle from "../common/SubTitle";
import Career from "./Career";
import Challenge from "./Challenge";
import CodeTime from "./CodeTime";
import Education from "./Education";

interface Props {}

const About = (props: Props) => {
  return (
    <Container>
      <CodeTime />
      <MultiItemContainer>
        <Education />
        <Career />
      </MultiItemContainer>
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

const MultiItemContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  div {
    flex: 1;
  }

  @media (max-width: 768px) {
    & {
      margin-top: 2rem;
      justify-content: center;
      flex-direction: column;
      gap: 3rem;
    }

    div {
      width: 100%;
    }
  }
`;

export default About;
