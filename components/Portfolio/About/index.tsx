import React from "react";
import styled from "@emotion/styled";
import Activity from "./Activity";
import Career from "./Career";
import Challenge from "./Challenge";
import CodeTime from "./CodeTime";
import Education from "./Education";
import Project from "./Project";
import { palette, shadow } from "styles/palette";

interface Props {}

const About = (props: Props) => {
  return (
    <Container>
      <CodeTime />
      <MultiItemContainer>
        <Education />
        <Career />
      </MultiItemContainer>
      <MultiItemContainer>
        <Activity />
        <Challenge />
      </MultiItemContainer>
      <SingleItemContainer>
        <Project />
      </SingleItemContainer>
    </Container>
  );
};

const Container = styled.div``;

const SingleItemContainer = styled.div`
  margin-top: 3rem;
  background-color: ${palette.white};
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: ${shadow.card};
`;

const MultiItemContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  background-color: ${palette.white};
  padding: 3rem;
  border-radius: 1rem;
  gap: 4rem;
  box-shadow: ${shadow.card};

  div {
    flex: 1;
  }

  @media (max-width: 768px) {
    & {
      margin-top: 2rem;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      padding: 0rem;
    }

    div {
      width: 100%;
    }
  }
`;

export default About;
